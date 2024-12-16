import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "./api";

const SingleArticle = () => {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    fetchArticleById(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading article...</p>;

  return (
    <div className="single-article">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={article.title} />
      <p className="article-body">{article.body}</p>
      <div className="article-info">
        <p>By {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Votes: {article.votes}</p>
        <p>Comments: {article.comment_count}</p>
      </div>
    </div>
  );
};

export default SingleArticle;
