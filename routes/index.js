const {
  getAlerts,
  getAgents,
  getAgent,
  getRule,
  getRules,
} = require("../controllers");

const home = {
  method: "GET",
  path: "/home",
  handler: (req, res) => {
    return "<h1>Hola desde la home</h1>";
  },
};
const alerts = {
  method: "GET",
  path: "/alerts/{id?}",
  handler: getAlerts,
};
const agents = {
  method: "GET",
  path: "/agents",
  handler: getAgents,
};
const agent = {
  method: "GET",
  path: "/agents/{id}",
  handler: getAgent,
};
const rules = {
  method: "GET",
  path: "/rules",
  handler: getRules,
};
const rule = {
  method: "GET",
  path: "/rules/{id}",
  handler: getRule,
};

const notFound = {
  method: "GET",
  path: "/{any*}",
  handler: (req, res) => {
    return res.redirect("/home");
  },
};

module.exports = {
  alerts,
  agents,
  agent,
  rules,
  rule,
  home,
  notFound,
};
