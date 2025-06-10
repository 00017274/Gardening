const { body } = require('express-validator');

//checking if inputss aer valid

exports.validatePlant = [
  body('plantType')
    .trim()
    .notEmpty().withMessage('Plant type is required.')
    .isLength({ min: 2 }).withMessage('Plant type must be at least 2 characters.'),
  
  body('variety')
    .trim()
    .notEmpty().withMessage('Variety is required.')
    .isLength({ min: 2 }).withMessage('Variety must be at least 2 characters.'),

  body('plantingDate')
    .notEmpty().withMessage('Planting date is required.')
    .isISO8601().withMessage('Planting date must be a valid date.'),

  body('location')
    .trim()
    .notEmpty().withMessage('Location is required.')
    .isLength({ min: 2 }).withMessage('Location must be at least 2 characters.')
];


