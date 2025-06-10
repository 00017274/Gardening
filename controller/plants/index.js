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

exports.getEdit = (req, res) => {
  const plant = plantService.getById(req.params.id);
  res.render('form', { plant, action: `/plants/${req.params.id}/edit` });
};

exports.postEdit = (req, res) => {
  plantService.update(req.params.id, req.body);
  res.redirect('/plants');
};

exports.postDelete = (req, res) => {
  plantService.remove(req.params.id);
  res.redirect('/plants');
};