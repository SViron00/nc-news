import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllArticles } from "./api";
import SortControls from "./SortControls";
import Card from "./Card";

const TopicArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    fetchAllArticles({ topic })
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(`No articles found for topic: ${topic}`);
        setIsLoading(false);
      });
  }, [topic]);

  if (isLoading) return <p>Loading articles...</p>;
  if (error) return <div className="error-message">{error}</div>;
  if (articles.length === 0)
    return (
      <div className="error-message">No articles found for this topic!</div>
    );

  return (
    <div>
      <h2>{topic} Articles</h2>
      <SortControls setArticles={setArticles} />
      <div className="articles-container">
        {articles.map((article) => (
          <Card key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default TopicArticles;
