import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IRecipe } from "types/types";
import Card from "components/card/Card";

function Search() {
    const dataTemp: Array<IRecipe> = require("../../data/sampledata.json");
    const navigate = useNavigate();
    const param = useParams();
    const [dataSearch, setDataSearch] = useState<Array<IRecipe>>([]);
    useEffect(() => {
        if (param?.nameRecipe) {
            const textSearch = param?.nameRecipe;
            const items = dataTemp.filter((item: IRecipe) => item.nameRecipe.includes(textSearch));
            setDataSearch(items);
        } else {
            navigate('/');
        }
        return () => {

        }
    }, [navigate])
    return (
        <>
            <span>Nhung Mon an ban dang tim lien quan toi: {param?.nameRecipe}</span>
            <div className="container-card">
                <div className="list-container">
                    {dataSearch.map((item: IRecipe) => {
                        return <Card Recipe={item} />;
                    })}
                </div>
            </div>
        </>
    )
}

export default Search;