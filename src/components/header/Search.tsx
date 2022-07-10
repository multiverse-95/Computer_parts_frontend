import React from "react";
import '../../assets/css/header.css';
class Search extends React.Component{
    render() {
        return(
            <div className="search-div">
                <input type="text" name="name" className="search-text" placeholder="Введите для поиска">

                </input>
            </div>
        )
    }
}
export default Search;