let plants = [];   //server

let id = 1;

exports.getAll = () => plants;
exports.getById = (plantId) => plants.find(p => p.id === parseInt(plantId));
exports.create = (data) => {
  plants.push({ id: id++, ...data });
};