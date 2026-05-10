const mongoose = require("mongoose");


function ConnectToDb() {
    return mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to database");
        })
        .catch((err) => {
            console.error("Database connection error:", err);
            throw err;
        });
}

module.exports = ConnectToDb
