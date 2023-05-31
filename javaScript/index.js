
const express = require("express");
const {Router} = require("express");
const app = express();


app.use(express.json());
const api = Router();

app.use("/js/api", api);
api.get("/", (req, res, next) => {
  return res.status(200).send(
  "Hello from javascript Microservice!",
  );
});
app.listen(8080);
