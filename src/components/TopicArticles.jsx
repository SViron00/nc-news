import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAllArticles } from "./api";
import Card from "./Card";

const TopicArticles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    fetchAllArticles({ topic }).then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <p>Loading articles...</p>;

  return (
    <div>
      <h2>{topic} Articles</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <Card key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default TopicArticles;
