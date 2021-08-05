"use strict";

const Hapi = require("@hapi/hapi");
const cors = require("cors");

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
    port: 4000,
    host: "localhost",
    routes: {
      cors: true,
    },
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
