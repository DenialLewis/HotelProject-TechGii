const express = require("express");
const cors = require("cors");

const healthRouter = require("./routes/health");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    name: "hotel-backend",
    status: "ok"
  });
});

app.use("/api/health", healthRouter);

module.exports = app;
