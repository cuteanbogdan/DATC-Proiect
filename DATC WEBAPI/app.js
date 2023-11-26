const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const passport = require("passport");
require("./passport.js")(passport);
require("./db");

const usersRouter = require("./routes/users");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// Routes
// Use the users router for any requests going to /api/users
app.use("/api/users", usersRouter);

app.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ msg: "Access granted to protected resource" });
  }
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
