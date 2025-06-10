const plantService = require('../../services');

exports.list = (req, res) => {
  const plants = plantService.getAll();
  res.render('plants', { plants });
};    

exports.getAdd = (req, res) => {
  res.render('form', { plant: {}, action: '/plants/add' });
};

exports.postAdd = (req, res) => {
  plantService.create(req.body);
  res.redirect('/plants');
};