const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// EXPRESS supports all HTTPS methods: GET, POST, PUT, DELETE
// -when 2 routes share the same path, the HTTPS verb/method determines which route is used.
// -route can be used to chain together different methods

// Access environment variables defined in .env
const PORT = process.env.PORT || 8080; // Default to 8080 if PORT is not defined in .env
const HOST = process.env.HOST || "localhost"; // Default to localhost if HOST is not defined in .env
const { CORS_ORIGIN } = process.env;

// The HTTP port for CORS_ORIGIN is (this where the front-end server is running & calling the back-end from)
app.use(cors({ origin: CORS_ORIGIN }), (req, res, next) => {
  next();
});

// only accepts json requests
app.use(express.json());

const lettersRoutes = require("./routes/lettersRoutes");
app.use("/api/letters", lettersRoutes);

// Start the Express application by listening on the specified port and host:
// Listen for HTTP requests on the given port
app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}/`);
});
