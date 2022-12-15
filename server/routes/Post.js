const router = require("express").Router();
const { requiredAuth } = require("../middlewares/requiredAuth");
const {
  createPost,
  deletePost,
  getPosts,
  getOnePost,
  likeDislikePost,
  getAllPosts,
  getUserPosts,
} = require("../controllers/PostController");

router.post("/newpost", requiredAuth, createPost);
router.patch("/:id", requiredAuth, createPost);
router.patch("/like/:id", requiredAuth, likeDislikePost);
router.get("/", requiredAuth, getPosts);
router.get("/allposts", requiredAuth, getAllPosts);
router.get("/userPosts/:id", requiredAuth, getUserPosts);
router.get("/:id", requiredAuth, getOnePost);
router.delete("/:id", requiredAuth, deletePost);

module.exports = router;
