import { useEffect, useState } from "react";
import { fetchAllArticles } from "./api";
import Card from "./Card";
import SortControls from "./SortControls";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to load articles. Please try again later!");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading articles...</p>;
  if (error) return <div className="error-message">{error}</div>;
  if (articles.length === 0)
    return <div className="error-message">No articles found!</div>;

  return (
    <div>
      <SortControls setArticles={setArticles} />
      <div className="articles-container">
        {articles.map((article) => (
          <Card key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesList;
