const alertsdb = require("../alerts.json");

const getRule = async (req, res) => {
  const id = req.params.id;
  const base = alertsdb;

  const alerts = await base.filter((e) => e._source.rule.id === id);

  return {
    data: {
      ...alerts[0]._source.rule,
      total_alerts: alerts.length,
      alerts: alerts,
    },
  };
};

module.exports = getRule;
