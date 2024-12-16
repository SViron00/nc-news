import { Link } from "react-router-dom";

const Card = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div className="article-card">
        <img
          src={article.article_img_url}
          alt={article.title}
          className="article-image"
        />
        <h3>{article.title}</h3>
        <div className="article-meta">
          <span>By {article.author}</span>
          <div className="article-stats">
            <span className="votes">👍 {article.votes}</span>
            <span className="comments">💬 {article.comment_count}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
