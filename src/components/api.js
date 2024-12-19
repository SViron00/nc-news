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

export const fetchCommentsByArticleId = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => data.comments);
};

export const updateArticleVotes = (article_id, inc_votes) => {
  return newsApi
    .patch(`/articles/${article_id}`, {
      inc_votes: inc_votes,
    })
    .then(({ data }) => data.article);
};

export const postComment = (article_id, username, body) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, {
      username,
      body,
    })
    .then(({ data }) => data.comment);
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};

export const fetchTopics = () => {
  return newsApi.get("/topics").then(({ data }) => data.topics);
};
