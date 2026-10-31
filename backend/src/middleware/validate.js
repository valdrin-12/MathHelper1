const { validationResult } = require('express-validator');

function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Never echo submitted values (passwords, codes) back to the client
    const list = errors.array().map((e) => ({ field: e.path, msg: e.msg }));
    return res.status(400).json({
      error: list[0].msg,
      errors: list,
    });
  }
  next();
}

module.exports = validate;
