const express = require('express');
const router = express.Router();

//this is for redifering /plants

router.get('/', (req, res) => {
  res.redirect('/plants');
});

module.exports = router;
