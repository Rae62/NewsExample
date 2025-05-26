const router = require("express").Router();

// const apiUsers = require("./user.route");
const apiPost = require("./post.route");

// router.use("/user", apiUsers);
router.use("/post", apiPost);

module.exports = router;
