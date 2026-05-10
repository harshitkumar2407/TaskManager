const app = require("./src/app");
const ConnectToDb = require("./src/config/database");
const PORT = process.env.PORT || 3000;

ConnectToDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to server on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server (database connection failed):", err);
    process.exit(1);
  });
