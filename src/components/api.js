import axios from "axios";
const newsApi = axios.create({
  baseURL: "https://sean-nc-news.onrender.com/api",
});

export const fetchAllArticles = () => {
  return newsApi.get("/articles").then((response) => response.data.articles);
};

export const fetchArticleById = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => data.article);
};
