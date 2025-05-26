export const getNews = async () => {
  try {
    const response = await fetch("http://localhost:3000/post", {
      credentials: "include",
    });

    if (!response.ok) throw new Error("Failed to fetch news");

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error in getNews:", err);
    return null;
  }
};

export const postNews = async ({ title, content, category, author }) => {
  try {
    const response = await fetch("http://localhost:3000/post/postNews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ title, content, category, author }),
    });

    if (!response.ok) throw new Error("Failed to post news");

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error in postNews:", err);
    return null;
  }
};
