const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("knex")(require("../knexfile"));

exports.register = async (req, res) => {
  const { username, password, avatar } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  await knex("users").insert({ username, password: hashedPassword, avatar });

  res.send("User registered");
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await knex("users").where({ username }).first();

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ id: user.id }, "jwtSecret", { expiresIn: 300 });

    const currentDate = new Date();
    const userDate = user.last_login ? new Date(user.last_login) : null;

    if (!user.last_login || isNextDay(userDate, currentDate)) {
      // If the date is null or it's the next day after the current date
      // Update the streak by 1 and set the date to the current date
      await knex("users")
        .where({ id: user.id })
        .update({ streak: user.streak + 1, last_login: currentDate });
    } else {
      // If the date is not the next day, update the date to the current date and reset the streak to 1
      await knex("users")
        .where({ id: user.id })
        .update({ last_login: currentDate, streak: 1 });
    }

    req.session.user = user;
    res.json({ auth: true, token: token, user: user });
  } else {
    res.json({ auth: false, message: "Incorrect login credentials" });
  }
};

function isNextDay(date1, date2) {
  if (date1 === null) {
    return true;
  }
  const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
  return date2 - date1 >= oneDay && date2.getDate() === date1.getDate() + 1;
}
