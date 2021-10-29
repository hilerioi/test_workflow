This directory contains one express servers:
* AppServer.ts - express web server with parameter support
* App.ts - express server class that is constructed via AppServer.ts

Make sure you install the node.js server software.  Ensure your path variable contains the execution path of the node.js binary.

To execute the server run the following commands:

1a. install prerequisites: npm install

1b. fix audits: npm audit fix

2a. To compile AppServer.ts: tsc AppServer.ts

2b. To compile App.ts: tsc App.ts

3. execute AppServer: node AppServer.js

4.To start the forms server, the workflow server, and then use this command:
* http://localhost:8080/workflow/1/start