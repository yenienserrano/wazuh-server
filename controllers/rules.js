const alertsdb = require("../alerts.json");

const getRules = async (req, res) => {
  const limit = req.query.limit || 10;
  const offset = req.query.offset || 0;
  let base = alertsdb;
  let rules = [];
  let rulesRes = [];
  let i;

  if (limit || offset) {
    base = await base.slice(
      offset <= 0 ? 0 : +offset - 1,
      (+limit <= 1 ? 1 : +limit) + (+offset <= 0 ? 0 : +offset - 1)
    );
  } else {
    base = alertsdb;
  }

  for (i = 0; i < base.length; i++) {
    const [rule] = await rules.filter((e) => e.id === base[i]._source.rule.id);
    if (!rule) {
      rules.push({ ...base[i]._source.rule });
    }
  }

  for (i = 0; i < rules.length; i++) {
    const rule = await base.filter((e) => e._source.rule.id === rules[i].id);

    rulesRes.push({ ...rules[i], total_alerts: rule.length });
  }

  return {
    total_items: rulesRes.length,
    data: rulesRes,
  };
};

module.exports = getRules;
