const { fetchAllVehicles } = require("../repository/vehicleRepository");

const getDueVehicles = () => {
  const vehicles = fetchAllVehicles();
  const today = new Date();

  const dueVehicles = vehicles.filter((vehicle) => {
    const lastService = new Date(vehicle.lastServiceDate);
    const daysSinceService = Math.floor(
      (today - lastService) / (1000 * 60 * 60 * 24)
    );
    return daysSinceService >= vehicle.serviceIntervalDays;
  });

  return dueVehicles;
};

module.exports = { getDueVehicles };
