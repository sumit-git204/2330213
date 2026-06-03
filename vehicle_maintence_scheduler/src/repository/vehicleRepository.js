const { getVehicles, updateServiceDate } = require("../db/vehicleDB");

const fetchAllVehicles = () => getVehicles();

const markServiced = (vehicleID) => {
  const today = new Date().toISOString().split("T")[0];
  updateServiceDate(vehicleID, today);
};

module.exports = { fetchAllVehicles, markServiced };
