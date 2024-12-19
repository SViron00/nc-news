import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <nav>
        <span style={{ margin: "0 20px" }}></span>
        <Link to="/articles">All Articles</Link>
        <span style={{ margin: "0 20px" }}></span>
        <Link to="/topics">Topics</Link>
      </nav>
    </header>
  );
};
export default Header;
