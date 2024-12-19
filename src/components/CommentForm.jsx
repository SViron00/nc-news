import { useState } from "react";
import { postComment } from "./api";

const CommentForm = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) {
      setSubmitMessage("Please write a comment first!");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("Posting your comment...");

    postComment(article_id, "grumpy19", newComment)
      .then((postedComment) => {
        setComments((currentComments) => [postedComment, ...currentComments]);
        setNewComment("");
        setSubmitMessage("Comment posted successfully!");
      })
      .catch(() => {
        setSubmitMessage("Failed to post comment. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Write your comment here..."
        disabled={isSubmitting}
      />
      <button type="submit" disabled={isSubmitting}>
        Post Comment
      </button>
      {submitMessage && <p>{submitMessage}</p>}
    </form>
  );
};

export default CommentForm;
