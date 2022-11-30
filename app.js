const express = require("express");
const app = express();

require("./src")(app);

app.listen(9000, () => {
  console.log("Express has been started");
});
