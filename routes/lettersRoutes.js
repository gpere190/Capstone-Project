const router = require("express").Router();
const {
  allLetters,
  singleLetter,
} = require("../controllers/lettersController");

router.route("/").get(allLetters);

router.route("/:letter").get(singleLetter);

module.exports = router;
