import { useState } from "react";
import { deleteComment } from "./api";

const CommentCard = ({ comment, setComments }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);
  const currentUser = "grumpy19";
  const isAuthor = comment.author === currentUser;

  const handleDelete = () => {
    setIsDeleting(true);
    setError(null);

    deleteComment(comment.comment_id)
      .then(() => {
        setComments((currentComments) =>
          currentComments.filter((c) => c.comment_id !== comment.comment_id)
        );
      })
      .catch((error) => {
        setIsDeleting(false);
        if (error.response?.status === 404) {
          setComments((currentComments) =>
            currentComments.filter((c) => c.comment_id !== comment.comment_id)
          );
        } else {
          setError("Failed to delete comment");
        }
      });
  };

  return (
    <div className={`comment-card ${isAuthor ? "my-comment" : ""}`}>
      <p className="comment-body">{comment.body}</p>
      <div className="comment-meta">
        <span className={isAuthor ? "current-user" : ""}>
          By {comment.author}
        </span>
        <span>👍 {comment.votes}</span>
        {isAuthor && (
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="delete-button"
          >
            {isDeleting ? "🗑️ Deleting..." : "🗑️ Delete"}
          </button>
        )}
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default CommentCard;
