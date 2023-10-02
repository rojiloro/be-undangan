require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const req = require("express/lib/request");
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./src/routes/index");

app.use("/api/v1/", router);

app.listen(port, () => console.log(`listening on port http://localhost: ${port}`));
