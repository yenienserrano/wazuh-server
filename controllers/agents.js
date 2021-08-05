const alertsdb = require("../alerts.json");

const getAgents = async (req, res) => {
  const limit = req.query.limit || 100;
  const offset = req.query.offset || 0;
  let base = alertsdb;
  let agents = [];
  let agentsRes = [];
  let i;

  if (limit || offset) {
    base = await base.slice(
      offset <= 0 ? 0 : +offset - 1,
      (+limit <= 1 ? 1 : +limit) + (offset <= 0 ? 0 : +offset - 1)
    );
  } else {
    base = alertsdb;
  }

  for (i = 0; i < base.length; i++) {
    const [agent] = await agents.filter(
      (e) => e.id === base[i]._source.agent.id
    );
    if (!agent) {
      agents.push({ ...base[i]._source.agent });
    }
  }

  for (i = 0; i < agents.length; i++) {
    const agent = await base.filter((e) => e._source.agent.id === agents[i].id);

    agentsRes.push({ ...agents[i], total_alerts: agent.length });
  }
  return {
    total_items: agentsRes.length,
    data: agentsRes,
  };
};

module.exports = getAgents;
