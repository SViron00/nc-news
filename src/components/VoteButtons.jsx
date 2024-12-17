import { useState } from "react";
import { updateArticleVotes } from "./api";

const VoteButtons = ({ article_id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [userVote, setUserVote] = useState(0);

  const handleVote = (increment) => {
    if (userVote !== increment) {
      const newVoteCount = votes + increment;
      const voteChange = increment - userVote;

      setVotes(newVoteCount);
      setUserVote(increment);

      updateArticleVotes(article_id, voteChange).catch((error) => {
        setVotes(votes);
        setUserVote(userVote);
        alert("Voting failed - please try again!");
      });
    }
  };

  return (
    <div className="vote-buttons">
      <button
        onClick={() => handleVote(1)}
        className={userVote === 1 ? "voted" : ""}
      >
        👍
      </button>
      <span>{votes}</span>
      <button
        onClick={() => handleVote(-1)}
        className={userVote === -1 ? "voted" : ""}
      >
        👎
      </button>
    </div>
  );
};

export default VoteButtons;
