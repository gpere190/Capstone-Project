const router = require("express").Router();
const {
  allLetters,
  singleLetter,
} = require("../controllers/lettersController");

router.route("/").get(allLetters);

router.route("/:id").get(singleLetter);

module.exports = router;
