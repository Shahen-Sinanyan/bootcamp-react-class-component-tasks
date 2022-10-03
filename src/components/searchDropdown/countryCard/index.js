import { Component } from "react";

import closeIcon from '../assets/close.png';

class CountryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardData: {}
        }
    }
    componentDidMount () {
        const {countryName, countries} = this.props
        this.setState({
            cardData: countries.find(item => item.country === countryName)
        })
    }
    
    render() {
        const {cardData} = this.state;
        const {handleCardCloseBtn} = this.props;
        return(
            <div className="main-countryCard">
                <h2>{cardData.country}</h2>
                <img src={cardData.flag}/>
                <img 
                    onClick={handleCardCloseBtn}
                     src={closeIcon} 
                     alt={'close'} 
                     className={'close-country'}
                />
                <table className="country-table">
                    <tbody>
                        <tr>
                            <th>Capital City</th>
                            <td>{cardData['Capital City']}</td>
                        </tr>
                        <tr>
                            <th>Population</th>
                            <td>{cardData.Population}</td>
                        </tr>
                        <tr>
                            <th>GDP</th>
                            <td>{cardData.GDP}</td>
                        </tr>
                        <tr>
                            <th>GDP / Capita</th>
                            <td>{cardData['GDP / Capita']}</td>
                        </tr>
                        <tr>
                            <th>ISO alpha-2</th>
                            <td>{cardData['ISO alpha-2']}</td>
                        </tr>
                        <tr>
                            <th>ISO alpha-3</th>
                            <td>{cardData['ISO alpha-3']}</td>
                        </tr>
                        <tr>
                            <th>Dialing Code</th>
                            <td>{cardData['Dialing Code']}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default CountryCard;