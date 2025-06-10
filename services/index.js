let plants = [];   //server
let id = 1;

exports.getAll = () => plants;
exports.getById = (plantId) => plants.find(p => p.id === parseInt(plantId));
exports.create = (data) => {
  plants.push({ id: id++, ...data });
};

//geting by id and  editing
exports.update = (plantId, data) => {
  const index = plants.findIndex(p => p.id === parseInt(plantId));
  plants[index] = { id: parseInt(plantId), ...data };
};
//removing from server
exports.remove = (plantId) => {
  plants = plants.filter(p => p.id !== parseInt(plantId));
};
