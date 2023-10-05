require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
const req = require("express/lib/request");
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  credential : true,
  origin : "*",
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
}))

const router = require("./src/routes/index");

app.use("/api/v1/", router);

app.listen(port, () => console.log(`listening on port : ${port}`));
