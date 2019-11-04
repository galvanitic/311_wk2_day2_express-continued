const vehicles = require('../data/vehicles');

//list
exports.list = function list(res, req) {
  res.json(vehicles);
}
// show
exports.show = function show(res, req) {
  let vehicle = vehicles.find(i => i._id == req.params.id);
  res.json(vehicle);
}
// create
exports.create = function create(res, req) {
  let body = req.body;
  let newVehicle = {
    _id: vehicles.length + 1,
    imgUrl: body.imgUrl,
    year: body.year,
    make: body.make,
    model: body.model,
    price: body.price,
    km: body.km,
    miles: body.miles,
    fuel: body.fuel,
    city: body.city,
    isNew: body.isNew
  }

  vehicles.push(newVehicle);
}