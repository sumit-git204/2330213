// Mock in-memory vehicle database
// Replace with a real DB connection (e.g. mongoose, pg) when ready

const vehicles = [
  {
    vehicleID: "v001",
    name: "Truck Alpha",
    lastServiceDate: "2024-11-01",
    serviceIntervalDays: 90,
  },
  {
    vehicleID: "v002",
    name: "Van Beta",
    lastServiceDate: "2025-01-15",
    serviceIntervalDays: 60,
  },
  {
    vehicleID: "v003",
    name: "Car Gamma",
    lastServiceDate: "2025-03-10",
    serviceIntervalDays: 30,
  },
];

const getVehicles = () => vehicles;

const updateServiceDate = (vehicleID, newDate) => {
  const vehicle = vehicles.find((v) => v.vehicleID === vehicleID);
  if (vehicle) {
    vehicle.lastServiceDate = newDate;
  }
};

module.exports = { getVehicles, updateServiceDate };
