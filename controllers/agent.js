const alertsdb = require("../alerts.json");

const getAgent = async (req, res) => {
  const id = req.params.id;
  const base = alertsdb;

  const alerts = await base.filter((e) => e._source.agent.id === id);

  return {
    data: {
      ...alerts[0]._source.agent,
      total_alerts: alerts.length,
      alerts: alerts,
    },
  };
};

module.exports = getAgent;
