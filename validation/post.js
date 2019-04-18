const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.post_details = !isEmpty(data.post_details) ? data.post_details : "";
  data.media = !isEmpty(data.media) ? data.media : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.post_details)) {
    errors.post_details = "Details field is required";
  }

  if (Validator.isEmpty(data.media)) {
    errors.media = "Please select media";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
