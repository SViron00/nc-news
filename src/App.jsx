import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ArticlesList from "./components/AllArticles";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
