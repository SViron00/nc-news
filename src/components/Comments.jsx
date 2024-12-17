import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "./api";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading comments...</p>;

  return (
    <section className="comments-section">
      <h3>Comments ({comments.length})</h3>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.comment_id} className="comment-card">
            <p className="comment-body">{comment.body}</p>
            <div className="comment-meta">
              <span>By {comment.author}</span>
              <span>👍 {comment.votes}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
