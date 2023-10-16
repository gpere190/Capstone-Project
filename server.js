const express = require("express");
const session = require("express-session");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();

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

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use("/api/users", userRoutes);

const lettersRoutes = require("./routes/lettersRoutes");
app.use("/api/letters", lettersRoutes);

// Start the Express application by listening on the specified port and host:
// Listen for HTTP requests on the given port
app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}/`);
});
