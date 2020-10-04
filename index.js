const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

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

app.listen(5000, () => console.log("Server listening on port 5000"));
