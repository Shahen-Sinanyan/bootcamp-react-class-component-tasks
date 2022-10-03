import { Component } from "react";

class ListOfCountries extends Component{

    render () {
        const {filteredCountries, handleCardChoose} = this.props;
        return(
             <div   className="countries-listFrame">
                {filteredCountries.map(item => {
                    return(
                        <div onClick={(e) => handleCardChoose(e)} key={item.country} className="countrySelf">
                            <img src={item.flag} alt='flag' className="search-flag-Country"/>
                            <span className="search-country-name">{item.country}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ListOfCountries;