import { useState, useEffect } from "react";
import { fetchTopics } from "./api";
import TopicCard from "./TopicCard";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTopics()
      .then((topicsData) => {
        setTopics(topicsData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Failed to load topics. Please try again later!");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading topics...</p>;
  if (error) return <div className="error-message">{error}</div>;
  if (topics.length === 0)
    return <div className="error-message">No topics found!</div>;

  return (
    <div>
      <h2>Topics</h2>
      <div className="topics-container">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} />
        ))}
      </div>
    </div>
  );
};
export default Topics;
