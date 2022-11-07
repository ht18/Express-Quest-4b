const { body, validationResult } = require('express-validator');

const validateMovie = [
  body("title").isLength({min: 1}).isLength({ max: 255 }),
  body("director").isLength({min: 1}).isLength({ max: 255 }),
  body("lastname").isLength({min: 1}).isLength({ max: 255 }),
  body("year").isLength({min: 1}).isLength({ max: 255 }),
  body("color").isLength({min: 1}).isLength({ max: 255 }),
  body("duration").isLength({min: 1}).isLength({ max: 255 }),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ validationErrors: errors.array() });
    } else {
      next();
    }
  },
];

const validateUser = [
    body("firstname").isLength({min: 1}).isLength({ max: 255 }),
    body("lastname").isLength({min: 1}).isLength({ max: 255 }),
    body("email").isEmail(),
    body("city").isLength({min: 1}).isLength({ max: 255 }),
    body("language").isLength({min: 1}).isLength({ max: 255 }),
    (req, res, next) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        res.status(422).json({ validationErrors: errors.array() });
      } else {
        next();
      }
    },
  ];

  module.exports = {
    validateUser,
    validateMovie
  };
  