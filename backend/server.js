const app = require("./app.js");
const dotenv = require("dotenv");
const path = require("path");
const port = 5000;

const connectDatabase = require("./config/database");

dotenv.config({ path: path.join(__dirname, "config", "config.env") });

connectDatabase();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
