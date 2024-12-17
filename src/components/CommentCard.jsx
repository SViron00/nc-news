const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p className="comment-body">{comment.body}</p>
      <div className="comment-meta">
        <span>By {comment.author}</span>
        <span>👍 {comment.votes}</span>
      </div>
    </div>
  );
};

export default CommentCard;
