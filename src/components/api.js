import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://sean-nc-news.onrender.com/api",
});

export const fetchAllArticles = () => {
  return newsApi.get("/articles").then((response) => response.data.articles);
};
