Wazuh server

An application used to search and filter Wazuh service rule, agent and alert data, built with hapi.js.

Installation and Setup Instructions

You will need node and npm installed globally on your machine.

Installation:

npm install

To Run Test Suite:

npm test

To Start Server:

npm start

To Visit App:

localhost:4000/home
localhost:4000/alerts
localhost:4000/agents
localhost:4000/agents/:id
localhost:4000/rules
localhost:4000/rules/:id
