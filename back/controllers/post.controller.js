const Post = require("../models/Post");

// GET all news
const getNews = async (req, res) => {
  try {
    const news = await Post.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(news);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
};

// POST a new news item
const postNews = async (req, res) => {
  const { title, content, category, author } = req.body;

  if (!title || !content || !category || !author) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newPost = new Post({ title, content, category, author });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ error: "Failed to create news post" });
  }
};

module.exports = {
  getNews,
  postNews,
};
