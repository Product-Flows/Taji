const corsAnywhere = require('cors-anywhere');

const host = 'localhost';
const port = 8080;

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
}).listen(port, host, () => {
  console.log(`Running CORS Anywhere on ${host}:${port}`);
});

const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello, Express.js is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
