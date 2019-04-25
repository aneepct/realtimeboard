import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

class Planner extends Component {
  render() {
    return (
      <div>
        <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
      </div>
    )
  }
}

Planner.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProp = state => ({
    auth: state.auth,
    post: state.post,
    errors: state.errors
});

export default connect(mapStateToProp, { })(Planner);
