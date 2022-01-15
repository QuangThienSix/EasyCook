import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Search () {
    const navigate = useNavigate();
    const param = useParams();
    useEffect(() => {
        if(param?.nameRecipe){
            console.log(param.nameRecipe);
        }else{
            navigate('/');
        }
        return () => {
            
        }
    }, [navigate])
    return (
        <div>
            Search
        </div>
    )
}

export default Search;