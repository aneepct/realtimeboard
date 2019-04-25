const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const graph = require('fbgraph');

// Getting authentication routes
const auth = require('./routes/api/auth');
// Getting user routes
const users = require('./routes/api/users');
// Getting post routes
const posts = require('./routes/api/posts');

const app = express();

// client_id:      '377603236353165'
// , client_secret:  '49898f7e048a65806ae1c044b56f8cad'
// client_id:      '441392896597448'
// , client_secret:  'c06e8a7541a9d716a1e5d423807222d1'
var conf = {
  client_id:      '377603236353165'
, client_secret:  '49898f7e048a65806ae1c044b56f8cad'
, scope:          'email, user_birthday, user_location, user_posts, publish_to_groups, manage_pages, publish_pages, groups_access_member_info'
// You have to set http://localhost:3000/ as your website
// using Settings -> Add platform -> Website
, redirect_uri:   'http://localhost:5000/api/fbauth'
};

let facebookToken = false;

// Body Parser middleware
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// DB Config
const db = require('./config/key').mongoURI;

// Connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.use('/api/auth', auth);
app.use('/api/user', users);
app.use('/api/post', posts);
app.get('/api/fbauth', function(req, res) {
 
  // we don't have a code yet
  // so we'll redirect to the oauth dialog
  if (!req.query.code) {
    console.log("Performing oauth for some user right now.");
  
    var authUrl = graph.getOauthUrl({
        "client_id":     conf.client_id
      , "redirect_uri":  conf.redirect_uri
      , "scope":         conf.scope
    });
 
    if (!req.query.error) { //checks whether a user denied the app facebook login/permissions
      res.redirect(authUrl);
    } else {  //req.query.error == 'access_denied'
      res.send('access denied');
    }
  }
  // If this branch executes user is already being redirected back with 
  // code (whatever that is)
  else {
    console.log("Oauth successful, the code (whatever it is) is: ", req.query.code);
    // code is set
    // we'll send that and get the access token
    graph.authorize({
        "client_id":      conf.client_id
      , "redirect_uri":   conf.redirect_uri
      , "client_secret":  conf.client_secret
      , "code":           req.query.code
    }, function (err, facebookRes) {
      console.log(facebookRes, 'token');
      facebookToken = facebookRes;
      res.json({"link": "click here to go back <a href='http://localhost:3000/'></a>"});
    });
  }
});

app.get('/api/getFacebookToken', function(req, res) {
  if(facebookToken){
    res.json(facebookToken);
  } else {
    res.status(400).json({ token: false, message: 'Failed to get token.' })
  }
});

if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));