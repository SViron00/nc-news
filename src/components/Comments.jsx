import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "./api";
import CommentCard from "./CommentCard";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading comments...</p>;

  return (
    <section className="comments-section">
      <h3>Comments ({comments.length})</h3>
      <div className="comments-list">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </div>
    </section>
  );
};

export default Comments;
