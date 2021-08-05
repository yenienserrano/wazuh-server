const alertsdb = require("../alerts.json");

const getAlerts = async (req, res) => {
  const limit = req.query.limit || 100;
  const offset = req.query.offset || 0;
  const id = req.query.id;
  let base = alertsdb;
  let alerts = [];

  if (id) {
    const arrId = id.split(",");
    for (let i = 0; i < arrId.length; i++) {
      const alert = await base.filter((alert) => alert._id === arrId[i]);
      alerts.push(alert);
    }
    return {
      total_items: alerts.length,
      data: alerts,
    };
  }
  if (limit || offset) {
    base = await base.slice(
      offset <= 0 ? 0 : +offset - 1,
      (+limit <= 1 ? 1 : +limit) + (offset <= 0 ? 0 : +offset - 1)
    );
  } else {
    base = alertsdb;
  }
  alerts = base;
  return {
    total_items: alerts.length,
    data: alerts,
  };
};

module.exports = getAlerts;
