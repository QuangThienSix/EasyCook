import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import * as ROUTE from './constants/route';
import Ranking from "pages/ranking/Ranking";
import MyRecipe from "pages/my-recipe/MyRecipe";
import PostsViewted from "pages/posts-viewted/PostsViewted";
import Collection from "pages/collection/Collection";
import Home from "pages/home/Home";
import UploadRecipe from "pages/upload-recipe/UploadRecipe";


function App() {
  
  return (
    <div className="App">
      <header className="header">
	  <nav className="flex-div">
		<div className="nav-left flex-div">
			<img src="images/menu.png" alt="" className="menu-icon" />
			<img src="images/logo.png" alt="" className="logo-icon" />
			<span className="logo-text">EasyCook</span>
		</div>
		<div className="nav-middle flex-div">
			<div className="search-box flex-div">
				<input type="text" placeholder="Tìm kiếm món ăn" />
				<a href="/Timkiem"><img src="images/search.png" alt="" className="search-icon" /></a>
			</div>
		</div>
		<div className="nav-right flex-div">
			<Link to={ROUTE.UPLOAD_RECIPE} className="button flex-div">
				<span className="button-icon flex-div">
					<img src="images/upload.png" alt="" />
				</span>
				<span className="button-text">Tạo công thức mới</span>
			</Link>
			<img src="images/avatar.jpg" alt="" className="user-icon" />
		</div>
	</nav>
	  </header>
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
			  <Route path={ROUTE.UPLOAD_RECIPE} element={<UploadRecipe />}/>
            </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
