import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IRecipe } from "types/types";
import Card from "components/card/Card";
import './style.css';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface optionCongThuc {
    id: number;
    name: string;
}

interface optionLoaiMon {
    id: number;
    name: string;
}

interface optionMua {
    id: number;
    name: string;
}

const optionsCongThuc: Array<optionCongThuc> = [
    { id: 0, name: "Tất cả" },
    { id: 1, name: "Món khai vị" },
    { id: 2, name: "Món tráng miệng" },
    { id: 3, name: "Món chay" },
    { id: 4, name: "Món chính" },
    { id: 5, name: "Món ăn sáng" },
    { id: 6, name: "Thức uống" },
    { id: 7, name: "Bánh - Bánh ngọt" },
    { id: 8, name: "Món ăn tối" },
    { id: 9, name: "Món khác" },
];

const optionsLoaiMon: Array<optionLoaiMon>= [
    { id: 0, name: "Tất cả"},
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
    { id: 34, name: "Món cơm"},
  ];

  const optionsMua: Array<optionMua> = [
    { id: 0, name: "Tất cả"},
    { id: 1, name: "Mùa Xuân" },
    { id: 2, name: "Mùa Hè" },
    { id: 3, name: "Mùa Thu" },
    { id: 4, name: "Mùa Đông" },
  ];

function Search() {
    const dataTemp: Array<IRecipe> = require("../../data/sampledata.json");
    const navigate = useNavigate();
    const param = useParams();
    const [dataFilter, setDataFilter] = useState<Array<IRecipe>>([]);
    const [dataSearch, setDataSearch] = useState<Array<IRecipe>>([]);
    const [recipe, setRecipe] = useState('0');
    const [typeRecipe, setTypeRecipe] = useState('0');
    const [season, setSeason] = useState('0');
    useEffect(() => {
        if (param?.nameRecipe) {
            const textSearch = param?.nameRecipe.toLowerCase();
            const items = dataTemp.filter((item: IRecipe) => item.nameRecipe.toLowerCase().includes(textSearch));
            setDataSearch(items);
            setDataFilter(items);
        } else {
            navigate('/');
        }
        return () => {
        }
    }, [navigate])
    const handleChange = (event: SelectChangeEvent) => {
        setRecipe(event.target.value as string);
        if(String(event.target.value) !== '0'){
            const recipeFor = optionsCongThuc.find((item: optionCongThuc) => {
                return String(item.id) === String(event.target.value);
            });
            const temp = dataSearch.filter((item: IRecipe) => {
                return item.recipefor?.find((item: string) => {
                    return item === recipeFor?.name;
                })
            })
            setDataFilter(temp);
        }else{
            setDataFilter(dataSearch);
        }
        
    };
    const handleLoaiMon = (event: SelectChangeEvent) => {
        setTypeRecipe(event.target.value as string);
        if(String(event.target.value) !== '0'){
            const typeOfDish = optionsLoaiMon.find((item: optionLoaiMon) => {
                return String(item.id) === String(event.target.value);
            });
            const temp = dataSearch.filter((item: IRecipe) => {
                return item.typeOfDish?.find((item: string) => {
                    return item === typeOfDish?.name;
                })
            })
            setDataFilter(temp);
        }else{
            setDataFilter(dataSearch);
        }
    };

    const handleSeason = (event: SelectChangeEvent) => {
        setSeason(event.target.value as string);
        if(String(event.target.value) !== '0'){
            const seasons = optionsMua.find((item: optionMua) => {
                return String(item.id) === String(event.target.value);
            });
            const temp = dataSearch.filter((item: IRecipe) => {
                return item.seasons?.find((item: string) => {
                    return item === seasons?.name;
                })
            })
            setDataFilter(temp);
        }else{
            setDataFilter(dataSearch);
        }
    };
    return (
        <>
            <span className="title-search">{dataSearch.length} cách làm {param?.nameRecipe} ngon</span>
            <div className="filter-search">
                <div>
                    <span>Công thức</span>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={recipe}
                        label="Công thức"
                        onChange={handleChange}
                    >
                        {optionsCongThuc.map((item: optionCongThuc) => {
                            return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                        })}
                    </Select>
                </div>
                <div>
                    <span>Loại món</span>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={typeRecipe}
                        onChange={handleLoaiMon}
                    >
                        {optionsLoaiMon.map((item: optionLoaiMon) => {
                            return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                        })}
                    </Select>
                </div>
                <div>
                    <span>Mùa</span>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={season}
                        label="Mùa"
                        onChange={handleSeason}
                    >
                        {optionsMua.map((item: optionMua) => {
                            return <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
                        })}
                    </Select>
                </div>
            </div>
            <div className="container-card">
                <div className="list-container">
                    {dataFilter.map((item: IRecipe) => {
                        return <Card Recipe={item} />;
                    })}
                </div>
            </div>
        </>
    )
}

export default Search;