import React from "react";
import '../../assets/css/header.css';
import {TextField, Input} from "@mui/material";
class Search extends React.Component{
    render() {
        return(
            <div className="search-div">
                <TextField className="search-text" hiddenLabel id="filled-hidden-label-normal" placeholder="Введите для поиска" variant="filled" size="small"
                />
            </div>
        )
    }
}
export default Search;