import { Link } from "react-router-dom";
import { topicImages } from "./utils/topicImages";

const TopicCard = ({ topic }) => {
  return (
    <Link to={`/topics/${topic.slug}`}>
      <div className="topic-card">
        <img
          src={topicImages[topic.slug]}
          alt={topic.slug}
          className="topic-image"
        />
        <h3>{topic.slug}</h3>
        <p>{topic.description}</p>
      </div>
    </Link>
  );
};

export default TopicCard;
