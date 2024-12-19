import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/AllArticles";
import HomePage from "./components/HomePage";
import SingleArticle from "./components/SingleArticle";
import Topics from "./components/Topics";
import TopicArticles from "./components/TopicArticles";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic" element={<TopicArticles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
