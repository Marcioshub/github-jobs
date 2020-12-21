const express = require("express");
const axios = require("axios");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
// const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "/client/build")));

app.post("/api/github", async (req, res) => {
  try {
    const { description, location, fulltime } = req.body;

    let BASE_URL = `https://jobs.github.com/positions.json?description=${
      description || ""
    }&full_time=${fulltime || ""}&location=${location || ""}`;

    const response = await axios.get(BASE_URL);

    res.json(response.data);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
