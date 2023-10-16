const knex = require("knex")(require("../knexfile"));

exports.allLetters = (_req, res) => {
  knex("letters")
    .select("letters.id", "letters.letter", "letters.image_src")
    .then((letters) => {
      res.status(200).json(letters);
    })
    .catch((err) => res.status(400).send(`Error retrieving Letters: ${err}`));
};

exports.singleLetter = (req, res) => {
  knex("letters")
    .where({ "letters.letter": req.params.letter })
    .select("letters.id", "letters.letter", "letters.image_src")
    .then((letter) => {
      if (!letter.length) {
        return res
          .status(404)
          .send(`Letter with id ${req.params.letter} is not found`);
      }
      res.status(200).json(letter[0]);
    })
    .catch((err) =>
      res
        .status(400)
        .send(
          `Error retrieving letter with id ${req.params.letter} with error ${err}`
        )
    );
};
