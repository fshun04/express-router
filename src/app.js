const express = require("express")
const app = express()
const usersRouter = require("../routes/users")
// const fruitsRouter = require("../routes/fruits")

app.use("/users", usersRouter);
// app.use("/fruit", fruitsRouter);



module.exports = app;