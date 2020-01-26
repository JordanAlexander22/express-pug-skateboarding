require('dotenv').config();
const server = require("../express-pug-skateboarding.git/api/server");

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`server up and running on port: ${port}`)
);
