const router = require("express").Router();

const postRoutes = require("./post.route");

router.use("/post", postRoutes);

module.exports = router;
