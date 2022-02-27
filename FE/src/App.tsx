import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import * as ROUTE from "./constants/route";
import Ranking from "pages/ranking/Ranking";
import MyRecipe from "pages/my-recipe/MyRecipe";
import PostsViewted from "pages/posts-viewted/PostsViewted";
import Collection from "pages/collection/Collection";
import Home from "pages/home/Home";
import UploadRecipe from "pages/upload-recipe/UploadRecipe";
import DetailsRecipe from "pages/details-recipe/DetailsRecipe";
import * as ICON from "./constants/icon";
import Search from "pages/search/Search";
import { NotFound } from "components/common";
import { IRecipe } from "types/types";
import { productActions } from "app/ProductSilce";
import { useAppDispatch } from "app/hooks";

function App() {
  const dataTemp: Array<IRecipe> = require("../src/data/sampledata.json");
  const [textSearch, setTextSearch] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSearch = (event: any) => {
    setTextSearch(event.target.value);
  };

  const handleEnter = (event: any) => {
    if (event.key === "Enter" && textSearch !== "") {
      navigate("/search/" + textSearch);
    }
  };

  const handleSearchText = () => {
    if (textSearch !== "") {
      navigate("/search/" + textSearch);
    }
  };

  useEffect(() => {
    dispatch(productActions.productSuccess(dataTemp));
  });

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
              <input
                type="text"
                value={textSearch}
                onKeyPress={(event: any) => handleEnter(event)}
                onChange={(event: any) => handleSearch(event)}
                placeholder="Tìm kiếm món ăn"
              />
              <img
                src="images/search.png"
                onClick={() => handleSearchText()}
                alt=""
                className="search-icon"
              />
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
          <Link to={ROUTE.HOME}>
            <ICON.HomeIcon />
            <span>Trang chủ</span>
          </Link>
          <Link to={ROUTE.RANKING}>
            <ICON.EqualizerIcon />
            <span>Xếp hạng thành viên</span>{" "}
          </Link>
          <Link to={ROUTE.MY_RECIPE}>
            <ICON.HistoryEduIcon />
            <span>Công thức của bạn</span>
          </Link>
          <Link to={ROUTE.POSTS_VIEWTED}>
            <ICON.VisibilityIcon />
            <span>Bài đăng đã xem</span>
          </Link>
          <Link to={ROUTE.COLLECTION}>
            <ICON.FavoriteBorderIcon />
            <span>Bộ sưu tập</span>
          </Link>
        </div>
        <div className="contain">
          <Routes>
            <Route path={ROUTE.HOME} element={<Home />} />
            <Route path={ROUTE.RANKING} element={<Ranking />} />
            <Route path={ROUTE.MY_RECIPE} element={<MyRecipe />} />
            <Route path={ROUTE.POSTS_VIEWTED} element={<PostsViewted />} />
            <Route path={ROUTE.COLLECTION} element={<Collection />} />
            <Route path={ROUTE.UPLOAD_RECIPE} element={<UploadRecipe />} />
            <Route
              path={ROUTE.DETAILS_RECIPE + ":recipeId"}
              element={<DetailsRecipe />}
            />
            <Route path={ROUTE.SEARCH + ":nameRecipe"} element={<Search />} />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
