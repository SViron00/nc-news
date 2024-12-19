import { useState, useEffect } from "react";
import { fetchTopics } from "./api";
import TopicCard from "./TopicCard";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topicsData) => {
      setTopics(topicsData);
    });
  }, []);

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
