const Card = ({ article }) => {
  return (
    <div className="article-card">
      <h3 className="article-title">{article.title}</h3>
      <div className="article-meta">
        <span className="article-author">By {article.author}</span>
        <div className="article-stats">
          <span className="votes">👍 {article.votes}</span>
          <span className="comments">💬 {article.comment_count}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
