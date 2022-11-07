const { body, validationResult } = require('express-validator');

const validateMovie = [
  body("title").isNotNull().isLength({ max: 255 }),
  body("director").isNotNull().isLength({ max: 255 }),
  body("lastname").isNotNull().isLength({ max: 255 }),
  body("year").isNotNull().isLength({ max: 255 }),
  body("color").isNotNull().isLength({ max: 255 }),
  body("duration").isNotNull().isLength({ max: 255 }),
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
    body("title").isNotNull().isLength({ max: 255 }),
    body("director").isNotNull().isLength({ max: 255 }),
    body("lastname").isNotNull().isLength({ max: 255 }),
    body("year").isNotNull().isLength({ max: 255 }),
    body("color").isNotNull().isLength({ max: 255 }),
    body("duration").isNotNull().isLength({ max: 255 }),
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
  