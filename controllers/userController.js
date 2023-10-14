const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../knexfile"));

exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  await knex("users").insert({ username, password: hashedPassword });

  res.send("User registered");
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await knex("users").where({ username }).first();

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user.id }, "jwtSecret", { expiresIn: 300 });

    req.session.user = user;
    res.json({ auth: true, token: token, user: user });
  } else {
    res.json({ auth: false, message: "Incorrect login credentials" });
  }
};
