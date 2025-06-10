const express = require('express');
const router = express.Router();
const controller = require('../../controller/plants');
const { validatePlant } = require('../../validators/plantvalidator');
const { validationResult } = require('express-validator');

//showing all plants
router.get('/', controller.list);

//adding form showing
router.get('/add', controller.getAdd);

//add logic
router.post('/add', validatePlant, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('form', {
      plant: req.body,
      action: '/plants/add',
      errors: errors.array()
    });
  }
  controller.postAdd(req, res);
});

//edit form showing
router.get('/:id/edit', controller.getEdit);

//edit logic
router.post('/:id/edit', validatePlant, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('form', {
      plant: { ...req.body, id: req.params.id },
      action: `/plants/${req.params.id}/edit`,
      errors: errors.array()
    });
  }
  controller.postEdit(req, res);
});

//delete
router.post('/:id/delete', controller.postDelete);

module.exports = router;