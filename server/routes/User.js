const router = require("express").Router();
const { requiredAuth } = require("../middlewares/requiredAuth");
const {
  createUser,
  loginUser,
  addRemoveFriend,
  getUser,
} = require("../controllers/UserController");

router.post("/login", loginUser);
router.post("/signup", createUser);
router.patch("/addRemoveFriend", requiredAuth, addRemoveFriend);
router.get("/getuser/:id", requiredAuth, getUser);

module.exports = router;
