const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.details = !isEmpty(data.details) ? data.details : "";
  data.media = !isEmpty(data.media) ? data.media : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isEmpty(data.details)) {
    errors.details = "Details field is required";
  }

  if (Validator.isEmpty(data.media)) {
    errors.media = "Please select media";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
