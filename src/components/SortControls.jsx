import { useState } from "react";
import { fetchAllArticles } from "./api";

const SortControls = ({ setArticles }) => {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  const handleSortChange = (e) => {
    console.log("Full event:", e);
    console.log("Target:", e.target);
    console.log("Value:", e.target.value);

    setSortBy(e.target.value);
    fetchAllArticles({ sort_by: e.target.value, order }).then((articles) =>
      setArticles(articles)
    );
  };

  const handleOrderChange = () => {
    const newOrder = order === "desc" ? "asc" : "desc";
    setOrder(newOrder);
    fetchAllArticles({ sort_by: sortBy, order: newOrder }).then((articles) =>
      setArticles(articles)
    );
  };

  return (
    <div className="sort-controls">
      <select onChange={handleSortChange} value={sortBy}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
      <button onClick={handleOrderChange}>
        {order === "desc" ? "⬇️" : "⬆️"}
      </button>
    </div>
  );
};

export default SortControls;
