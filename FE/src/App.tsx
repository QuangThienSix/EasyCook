import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import * as ROUTE from './constants/route';
import Ranking from "pages/ranking/Ranking";
import MyRecipe from "pages/my-recipe/MyRecipe";
import PostsViewted from "pages/posts-viewted/PostsViewted";
import Collection from "pages/collection/Collection";
//import * as PAGES from './pages/index';

const Home = () => {
  return <div>home</div>
}

function App() {
  
  return (
    <div className="App">
      <header className="header">header</header>
      <div className="container">
        <div className="side-bar">
            <Link to={ROUTE.HOME}>Trang chủ</Link>
            <Link to={ROUTE.RANKING}>Xếp hạng thành viên </Link>
            <Link to={ROUTE.MY_RECIPE}>Công thức của bạn</Link>
            <Link to={ROUTE.POSTS_VIEWTED}>Bài đăng đã xem</Link>
            <Link to={ROUTE.COLLECTION}>Bộ sưu tập</Link>
        </div>
        <div className="contain">
            <Routes>
              <Route path={ROUTE.HOME} element={<Home />}/>
              <Route path={ROUTE.RANKING} element={<Ranking />}/>
              <Route path={ROUTE.MY_RECIPE} element={<MyRecipe />}/>
              <Route path={ROUTE.POSTS_VIEWTED} element={<PostsViewted />}/>
              <Route path={ROUTE.COLLECTION} element={<Collection />}/>
            </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
