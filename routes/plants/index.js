const express = require('express');
const router = express.Router();
const controller = require('../../controller/plants');

//showing all plants
router.get('/', controller.list);

//adding form 
router.get('/add', controller.getAdd);

//add logic
router.post('/add', (req, res) => {
  controller.postAdd(req, res);
});


module.exports = router;