import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IRecipe, Resources } from "types/types";
import "./style.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StreetviewIcon from "@mui/icons-material/Streetview";
import Rating from "@mui/material/Rating";
import ResourcesPage from "components/resources";
import TutorialPage from "components/tutorial";
import { Avatar, Button, TextField, Typography } from "@mui/material";
export default function DetailsRecipe(): JSX.Element {
  const dataTemp: Array<IRecipe> = require("../../data/sampledata.json");
  const { recipeId } = useParams<{ recipeId: string }>();

  const [value, setValue] = useState<number | null>(2);
  const [valueContent, setValueContent] = useState<string | null>();

  const initialValue = [{ rating: 3, content: " --- Bình Luận ---" }];
  const [arrRat, setArrRat] = useState(initialValue);

  const data: IRecipe = {
    avatarImage: "",
    clock: "",
    nameRecipe: "",
    numberViewted: 0,
    rating: 0,
    recipeId: 0,
    urlImage: "",
    resources: [],
    tutorial: [],
  };

  const detailRecipe: IRecipe =
    dataTemp.find((r) => String(r.recipeId) === recipeId) || data;

  const handleChange = (e: any) => {
    const value = e?.target?.value;
    setValueContent(value);
  };
  const handleSubmit = () => {
    const data = {
      rating: value ? value : 3,
      content: valueContent ? valueContent : "",
    };
    setArrRat([...arrRat, data]);
  };

  return (
    <div className="detailrecpie">
      <div className="banner">
        <div className="img">
          <img src={`/${detailRecipe.urlImage}`} alt="" />
          <div className="avatar">
            <div className="img">
              <img src={`/${detailRecipe.avatarImage}`} alt="" />
            </div>
            <div className="content">
              <h3>Yan Can Cook</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="name">
        <div className="time">
          <AccessTimeIcon />
          <h5>{detailRecipe.clock}</h5>
        </div>
        <div className="name__recipe">
          <h5>{detailRecipe.nameRecipe}</h5>
          <div className="rating">
            <Rating name="read-only" value={5} readOnly />
          </div>
        </div>
        <div className="like">
          <StreetviewIcon />
          <h5>{detailRecipe.numberViewted}</h5>
        </div>
      </div>

      <div className="resources">
        <div className="resource-list">
          <div className="content_left">
            <h3>Nguyên liệu</h3>
          </div>
          <div className="content_right">
            <h3>Khảu phần: 2 người</h3>
          </div>
        </div>
        {detailRecipe.resources.map((resource: Resources) => {
          return <ResourcesPage key={resource.name} resources={resource} />;
        })}
      </div>

      <div className="tutorial">
        <h3 style={{ padding: "1rem 3rem" }}>Hướng dẫn</h3>
        {detailRecipe.tutorial.map((resource: Resources) => {
          return <TutorialPage key={resource.name} resources={resource} />;
        })}
      </div>

      <div className="evaluate">
        <h3 style={{ padding: "1rem 3rem" }}>
          Đánh giá (5) <Rating name="read-only" value={4} readOnly />
        </h3>
      </div>

      <div className="evaluate__ratting">
        <div className="avatar_lo">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <div className="content_ev">
          <div className="edit">
            <Typography component="legend">Beta</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className="edit__content">
            <Typography component="legend">Viết đánh giá của bạn</Typography>
            <TextField
              id="standard-basic"
              variant="standard"
              value={valueContent}
              onChange={handleChange}
            />
          </div>
          <div className="eva__submit">
            <Button
              onClick={handleSubmit}
              style={{ marginRight: ".3rem" }}
              variant="contained"
            >
              Xác nhận
            </Button>
            <Button variant="outlined">Hủy</Button>
          </div>
        </div>
      </div>
      {arrRat.map((item) => (
        <div className="evaluate__ratting__show">
          <div className="avatar_lo">
            <Avatar alt="Remy Sharp" src={`/${detailRecipe.avatarImage}`} />
          </div>
          <div className="content_ev">
            <div className="edit__content">
              <Typography component="legend">Viết đánh giá của bạn</Typography>
              <Rating name="read-only" value={item.rating} readOnly />
              <h4>{item.content}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
