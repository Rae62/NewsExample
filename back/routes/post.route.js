const router = require("express").Router();
const { getNews, postNews } = require("../controllers/post.controller");

router.get("/", getNews);
router.post("/postNews", postNews);

module.exports = router;
