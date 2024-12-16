import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/AllArticles";
import HomePage from "./components/HomePage";
import SingleArticle from "./components/SingleArticle";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
