import { useEffect, useState } from "react";
import { fetchAllArticles } from "./api";
import Card from "./Card";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllArticles().then((articlesData) => {
      setArticles(articlesData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading articles...</p>;

  return (
    <div className="articles-container">
      {articles.map((article) => (
        <Card key={article.article_id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
