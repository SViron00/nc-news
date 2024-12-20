import { useState } from "react";
import { updateArticleVotes } from "./api";

const VoteButtons = ({ article_id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [userVote, setUserVote] = useState(0);
  const [error, setError] = useState(null);

  const handleVote = (increment) => {
    if (userVote !== increment) {
      const newVoteCount = votes + increment;
      const voteChange = increment - userVote;

      setVotes(newVoteCount);
      setUserVote(increment);
      setError(null);

      updateArticleVotes(article_id, voteChange).catch((error) => {
        setVotes(votes);
        setUserVote(userVote);
        setError("Voting failed - please try again!");
      });
    }
  };

  return (
    <div className="vote-buttons">
      <button
        onClick={() => handleVote(1)}
        className={userVote === 1 ? "voted" : ""}
        disabled={!!error}
      >
        👍
      </button>
      <span>{votes}</span>
      <button
        onClick={() => handleVote(-1)}
        className={userVote === -1 ? "voted" : ""}
        disabled={!!error}
      >
        👎
      </button>
      {error && <div className="error-message vote-error">{error}</div>}
    </div>
  );
};
export default VoteButtons;
