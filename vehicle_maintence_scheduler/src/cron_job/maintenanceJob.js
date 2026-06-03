const cron = require("node-cron");
const { getDueVehicles } = require("../service/vehicleService");

const startMaintenanceScheduler = () => {
  // Runs every day at 8:00 AM
  cron.schedule("0 8 * * *", () => {
    console.log(`[${new Date().toISOString()}] Running maintenance check...`);

    const dueVehicles = getDueVehicles();

    if (dueVehicles.length === 0) {
      console.log("No vehicles due for maintenance today.");
      return;
    }

    dueVehicles.forEach((vehicle) => {
      console.log(
        `ALERT: Vehicle "${vehicle.name}" (ID: ${vehicle.vehicleID}) is due for maintenance!`
      );
      // TODO: hook into notification_app_be to send real notifications
    });
  });

  console.log("Vehicle maintenance scheduler started. Runs daily at 8:00 AM.");
};

module.exports = { startMaintenanceScheduler };
