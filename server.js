"use strict";

const Hapi = require("@hapi/hapi");
const {
  alerts,
  agents,
  agent,
  rules,
  rule,
  home,
  notFound,
} = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route([alerts, agents, agent, rules, rule, home, notFound]);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
