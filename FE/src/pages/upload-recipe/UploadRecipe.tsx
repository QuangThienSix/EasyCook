import React, { useRef } from "react";
import "./style.css";
import { Grid, TextField, TextareaAutosize, Button } from "@mui/material";
import Multiselect from "multiselect-react-dropdown";

function UploadRecipe() {
  const optionsCongthuc = [
    { id: 1, name: "Món khai vị" },
    { id: 2, name: "Món tráng miệng" },
    { id: 3, name: "Món chay" },
    { id: 4, name: "Món chính" },
    { id: 5, name: "Món ăn sáng" },
    { id: 6, name: "Thức uống" },
    { id: 7, name: "Bánh - Bánh ngọt" },
    { id: 8, name: "Món khác" },
  ];
  const optionsLoaimon = [
    { id: 1, name: "Salad" },
    { id: 2, name: "Nước chấm - Sốt Canh" },
    { id: 3, name: "Lẩu" },
    { id: 4, name: "Nộm - Gỏi" },
    { id: 5, name: "Soup - Cháo" },
    { id: 6, name: "Nem - Chả" },
    { id: 7, name: "Chay" },
    { id: 8, name: "Xôi" },
    { id: 9, name: "Bánh mặn - Ngọt" },
    { id: 10, name: "Sinh tố - Nước ép" },
    { id: 11, name: "Cocktail - Mocktail" },
    { id: 12, name: "Kem " },
    { id: 13, name: "Chè" },
    { id: 14, name: "Mứt - Kẹo" },
    { id: 15, name: "Đồ sống" },
    { id: 16, name: "Snacks" },
    { id: 17, name: "Cupcake - Muffin" },
    { id: 18, name: "Pasta - Spaghetti" },
    { id: 19, name: "Miến - Hủ tiếu" },
    { id: 20, name: "Bún - Mì - Phở" },
    { id: 21, name: "Đồ uống" },
    { id: 22, name: "Nướng - Quay" },
    { id: 23, name: "Nghêu - Sò - Ốc" },
    { id: 24, name: "Rang - Xào" },
    { id: 25, name: "Món chiên" },
    { id: 26, name: "Món cuốn" },
    { id: 27, name: "Chưng - hấp" },
    { id: 28, name: "Muối chua - Ngâm chua" },
    { id: 29, name: "Kho - Rim" },
    { id: 30, name: "Ủ - Lên men" },
    { id: 31, name: "Món luộc" },
    { id: 32, name: "Thạch - Rau câu" },
    { id: 33, name: "Sữa chua" },
  ];
  const optionsCachthuchien = [
    { id: 1, name: "Nướng" },
    { id: 2, name: "Chiên" },
    { id: 3, name: "Lẩu" },
    { id: 4, name: "Luộc" },
    { id: 5, name: "Hầm" },
    { id: 6, name: "Hấp" },
    { id: 7, name: "Tiềm" },
    { id: 8, name: "Xào" },
    { id: 9, name: "Trộn" },
    { id: 10, name: "Xay" },
    { id: 11, name: "Ép" },
    { id: 12, name: "Kho" },
    { id: 13, name: "Ngâm" },
    { id: 14, name: "Om" },
    { id: 15, name: "Sốt" },
    { id: 16, name: "Nấu" },
    { id: 17, name: "Pha chế" },
    { id: 18, name: "Muối" },
    { id: 19, name: "Vắt" },
    { id: 20, name: "Ủ" },
    { id: 21, name: "Cuốn" },
    { id: 22, name: "Quay" },
    { id: 23, name: "Rang" },
    { id: 24, name: "Làm bánh" },
    { id: 25, name: "Nước chấm" },
    { id: 26, name: "Uống" },
    { id: 27, name: "Chưng" },
    { id: 28, name: "Ăn sống" },
    { id: 29, name: "Ăn" },
    { id: 30, name: "Ướp" },
    { id: 31, name: "Ram" },
    { id: 32, name: "Luộc-Hấp" },
    { id: 33, name: "Chiên-Xào-Rang" },
    { id: 34, name: "Hầm - Om - Kho - Ram" },
    { id: 35, name: "Quay - Nướng" },
    { id: 36, name: "Ngâm - Ủ - Muối" },
    { id: 37, name: "Ép - Vắt - Xay" },
    { id: 38, name: "Trộn - Cuốn" },
  ];
  const optionsMuadiple = [
    { id: 1, name: "Mùa Xuân" },
    { id: 2, name: "Mùa Hè" },
    { id: 3, name: "Mùa Thu" },
    { id: 4, name: "Mùa Đông" },
  ];
  const optionsMucdich = [
    { id: 1, name: "Ăn sáng" },
    { id: 2, name: "Ăn trưa" },
    { id: 3, name: "Ăn kiêng" },
    { id: 4, name: "Giảm cân" },
    { id: 5, name: "Cho phái mạnh" },
    { id: 6, name: "Ăn vặt" },
    { id: 7, name: "Tiệc" },
    { id: 8, name: "Ăn chay" },
    { id: 9, name: "Chữa bệnh" },
    { id: 10, name: "Ăn gia đình" },
    { id: 11, name: "Phụ nữ sau khi sinh" },
    { id: 12, name: "Phụ nữ mang thai" },
    { id: 13, name: "Cho sức khỏe" },
    { id: 14, name: "Cho trẻ em" },
    { id: 15, name: "Cho tim mạch" },
    { id: 16, name: "Cho phái nữ" },
    { id: 17, name: "Tăng cân" },
  ];

  const inputFile = useRef(null);
  const onClickAddImg = () => {
    // inputFile.current.click();
  };

  return (
    <div>
      <Grid container spacing={3} className="row">
        <Grid item xs>
          <div className="title">Ảnh món ăn</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <input type="file" ref={inputFile} style={{ display: "none" }} />
            <img
              src="images/addImg.png"
              alt="Add image"
              width="200"
              height="200"
              onClick={onClickAddImg}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="row">
        <Grid item xs>
          <div className="title">Tên món ăn</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <TextField fullWidth />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={3} className="row">
        <Grid item xs>
          <div className="title">Mô tả</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <TextareaAutosize
              minRows={5}
              style={{ width: "100%", fontSize: "16px", padding: "15px" }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="row">
        <Grid item xs>
          <div className="title">Thời gian nấu</div>
        </Grid>
        <Grid item xs={10} className="time">
          <div>
            <TextField
              type="number"
              InputProps={{
                inputProps: {
                  min: 0,
                },
              }}
            />
          </div>
          <span style={{ margin: "15px" }}>Phút</span>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="row">
        <Grid item xs>
          <div className="title">Nguyên liệu</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <div>
              <Grid container>
                <Grid item xs={5}>
                  <TextField fullWidth value="Tên" />
                </Grid>
                <Grid item xs={2}>
                  <div>
                    <TextField fullWidth value="Số lượng" />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div>
                    <TextField fullWidth value="Đơn vị" />
                  </div>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
              <Grid container className="add_row">
                <Grid item xs={5}>
                  <TextField fullWidth />
                </Grid>
                <Grid item xs={2}>
                  <div>
                    <TextField fullWidth />
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <div>
                    <TextField fullWidth />
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div>
                    <TextField fullWidth />
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="add">
              <Button variant="contained">Add</Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="row">
        <Grid item xs>
          <div className="title">Các bước chi tiết</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <div>
              <Grid container>
                <Grid item xs={1}>
                  <TextField fullWidth value="Bước" />
                </Grid>
                <Grid item xs={9}>
                  <div>
                    <TextField fullWidth value="Chi tiết" />
                  </div>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
              <Grid container className="add_row">
                <Grid item xs={1}>
                  <TextField fullWidth />
                </Grid>
                <Grid item xs={9}>
                  <div>
                    <TextField fullWidth />
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div>
                    <TextField fullWidth />
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="add">
              <Button variant="contained">Add</Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="row">
        <Grid item xs>
          <div className="title">Công thức</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <Multiselect
              options={optionsCongthuc}
              displayValue="name"
              showCheckbox={true}
              style={{
                searchBox: {
                  height: "56px",
                },
                inputField: {
                  fontSize: "16px",
                  marginTop: "13px",
                },
              }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="row">
        <Grid item xs>
          <div className="title">Loại món</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <Multiselect
              options={optionsLoaimon}
              displayValue="name"
              showCheckbox={true}
              style={{
                searchBox: {
                  height: "56px",
                },
                inputField: {
                  fontSize: "16px",
                  marginTop: "13px",
                },
              }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="row">
        <Grid item xs>
          <div className="title">Cách thực hiện</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <Multiselect
              options={optionsCachthuchien}
              displayValue="name"
              showCheckbox={true}
              style={{
                searchBox: {
                  height: "56px",
                },
                inputField: {
                  fontSize: "16px",
                  marginTop: "13px",
                },
              }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="row">
        <Grid item xs>
          <div className="title">Mùa &amp; dịp lễ</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <Multiselect
              options={optionsMuadiple}
              displayValue="name"
              showCheckbox={true}
              style={{
                searchBox: {
                  height: "56px",
                },
                inputField: {
                  fontSize: "16px",
                  marginTop: "13px",
                },
              }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="row">
        <Grid item xs>
          <div className="title">Mục đích</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <Multiselect
              options={optionsMucdich}
              displayValue="name"
              showCheckbox={true}
              style={{
                searchBox: {
                  height: "56px",
                },
                inputField: {
                  fontSize: "16px",
                  marginTop: "13px",
                },
              }}
            />
          </div>
        </Grid>
      </Grid>
      <div className="done">
        <Button variant="contained" style={{ marginBottom: "20px" }}>
          Hoàn tất
        </Button>
      </div>
    </div>
  );
}

export default UploadRecipe;
