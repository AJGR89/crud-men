const { body, validationResult } = require("express-validator");

const validateGeneral = (req, res, next) => {
  console.log("validacion general");
  next();
};

const validateEmail = [
  body("phone_number").isMobilePhone(),
  body("email").isEmail(),
  (req, res, next) => {
    const errorValidation = validationResult(req);
    console.log(errorValidation.isEmpty());
    if (!errorValidation.isEmpty()) {
      return res.status(500).json({
        title: "Error data",
        error: errorValidation,
      });
    }
    next();
  },
];

module.exports = {
  validateGeneral,
  validateEmail,
};
