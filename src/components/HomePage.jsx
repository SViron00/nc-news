import { useState, useEffect } from "react";
import { fetchAllArticles } from "./api";
import Card from "./Card";

const HomePage = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllArticles().then((articles) => {
      const sortedByComments = articles.sort(
        (a, b) => b.comment_count - a.comment_count
      );
      const topSix = sortedByComments.slice(0, 6);
      setFeaturedArticles(topSix);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading main page...</p>;

  return (
    <div className="home-container">
      <h2>Most Discussed Articles</h2>
      <div className="articles-container">
        {featuredArticles.map((article) => (
          <Card key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
