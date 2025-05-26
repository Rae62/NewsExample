import { useState } from "react";
import { PostContext } from "../context/postContext";
import { getNews, postNews } from "../apis/post.api";

export default function PostProvider({ children }) {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const data = await getNews();
    if (data) setNews(data);
  };

  const addNews = (newPost) => {
    setNews((prev) => [...prev, newPost]);
  };

  return (
    <PostContext.Provider value={{ news, fetchNews, addNews }}>
      {children}
    </PostContext.Provider>
  );
}
