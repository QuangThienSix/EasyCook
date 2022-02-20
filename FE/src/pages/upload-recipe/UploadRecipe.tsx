import React, { useState } from "react";
import "./style.css";
import {
  Grid,
  TextField,
  TextareaAutosize,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import Multiselect from "multiselect-react-dropdown";
import ImageUploading, { ImageListType } from "react-images-uploading";

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
  const optionsDonVi = [
    { id: 1, name: "gr" },
    { id: 2, name: "Kg" },
    { id: 3, name: "ml" },
    { id: 4, name: "L" },
    { id: 5, name: "Muỗng cafe" },
    { id: 6, name: "Muỗng canh" },
  ];

  const [images, setImages] = useState([]);
  const [resources, setResources] = useState([0]);
  const [steps, setSteps] = useState([0]);

  const onChangeImg = (imageList: ImageListType) => {
    setImages(imageList as never[]);
  };

  const addRow = (type: string) => {
    if (type === "resources") {
      if (resources.length > 0) {
        let max = Math.max.apply(null, resources);
        resources.push(max + 1);
      } else {
        resources.push(0);
      }
      setResources([...resources]);
    } else {
      if (steps.length > 0) {
        let max = Math.max.apply(null, steps);
        steps.push(max + 1);
      } else {
        steps.push(0);
      }
      setSteps([...steps]);
    }
  };

  const deleteRow = (type: string, id: number) => {
    if (type === "resources") {
      const temp = resources.filter((x) => x !== id);
      setResources([...temp]);
    } else {
      const temp = steps.filter((x) => x !== id);
      setSteps([...temp]);
    }
  };

  return (
    <div>
      <Grid container spacing={3} className="row">
        <Grid item xs>
          <div className="title">Ảnh món ăn</div>
        </Grid>
        <Grid item xs={10}>
          <div>
            <ImageUploading value={images} onChange={onChangeImg} maxNumber={1}>
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                isDragging,
                dragProps,
              }) => (
                <div className="upload__image-wrapper">
                  <div
                    style={{
                      display: imageList.length == 0 ? "block" : "none",
                    }}
                  >
                    <button
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      <img src="images/addImg.png" width="150" height="150" />
                    </button>
                  </div>
                  {imageList.length > 0 && (
                    <div>
                      <img
                        src={imageList[0].dataURL}
                        width="150"
                        height="150"
                        onClick={() => onImageUpdate(0)}
                      />
                    </div>
                  )}
                </div>
              )}
            </ImageUploading>
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
              style={{
                width: "100%",
                padding: "16.5px 14px",
                borderColor: "#c4c4c4",
                borderRadius: 5,
                fontSize: "16px",
                backgroundColor: "#e5e5e5",
              }}
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
                  <TextField
                    disabled
                    fullWidth
                    label="Tên"
                    InputLabelProps={{
                      style: {
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "100%",
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    disabled
                    fullWidth
                    label="Số lượng"
                    InputLabelProps={{
                      style: {
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "100%",
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    disabled
                    fullWidth
                    label="Đơn vị"
                    InputLabelProps={{
                      style: {
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "100%",
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
              {resources.map((item) => (
                <Grid
                  key={item}
                  id={`resrc${item}`}
                  container
                  className="add_row"
                >
                  <Grid item xs={5}>
                    <TextField fullWidth />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      type="number"
                      InputProps={{
                        inputProps: {
                          min: 0,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <select>
                      <option value="" disabled selected>
                        Chọn định lượng
                      </option>
                      {optionsDonVi.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="contained"
                      fullWidth
                      style={{
                        height: "55px",
                        background: "none",
                      }}
                      onClick={() => {
                        deleteRow("resources", item);
                      }}
                    >
                      <img
                        src="images/delete_step.png"
                        width="25"
                        height="25"
                      />
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </div>
            <div className="add">
              <Button
                variant="contained"
                fullWidth
                style={{
                  height: "55px",
                  width: "149.91px",
                }}
                onClick={() => {
                  addRow("resources");
                }}
              >
                <img src="images/add_step.png" width="25" height="25" />
              </Button>
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
                  <TextField
                    disabled
                    fullWidth
                    label="Bước"
                    InputLabelProps={{
                      style: {
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "100%",
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    disabled
                    fullWidth
                    label="Chi tiết"
                    InputLabelProps={{
                      style: {
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "100%",
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
              {steps.map((item, idx) => (
                <Grid
                  key={item}
                  id={`step${item}`}
                  container
                  className="add_row"
                >
                  <Grid item xs={1}>
                    <TextField
                      disabled
                      fullWidth
                      label={idx + 1}
                      InputLabelProps={{
                        style: {
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          width: "100%",
                          color: "black",
                          textAlign: "center",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <div>
                      <TextField fullWidth />
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      variant="contained"
                      fullWidth
                      style={{
                        height: "55px",
                        background: "none",
                      }}
                      onClick={() => {
                        deleteRow("steps", item);
                      }}
                    >
                      <img
                        src="images/delete_step.png"
                        width="25"
                        height="25"
                      />
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </div>
            <div className="add">
              <Button
                variant="contained"
                fullWidth
                style={{
                  height: "55px",
                  width: "149.91px",
                }}
                onClick={() => {
                  addRow("steps");
                }}
              >
                <img src="images/add_step.png" width="25" height="25" />
              </Button>
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
              placeholder="Lựa chọn"
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
              placeholder="Lựa chọn"
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
              placeholder="Lựa chọn"
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
              placeholder="Lựa chọn"
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
              placeholder="Lựa chọn"
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
        <Button
          variant="contained"
          style={{
            marginBottom: "20px",
            height: "56px",
            width: "149.91px",
            fontSize: "20px",
          }}
        >
          Hoàn tất
        </Button>
      </div>
    </div>
  );
}

export default UploadRecipe;
