const express = require("express");
const app = express.Router();

/**
 * @path /auth/users
 */
app.use("/users", require("./routes/users"));

/**
 * @path /auth/clubs
 */
app.use("/clubs", require("./routes/clubs"));

/**
 * @path /auth/verify
 */
app.use("/verify", require("./routes/verify"));

module.exports = app;