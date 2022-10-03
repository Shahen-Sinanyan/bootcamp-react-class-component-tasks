import { Component } from "react";

import countriesData from '../data/countriesData.js';
import ListOfCountries from "../listOfCountries/index.js";
import CountryCard from '../countryCard'

class InputSearch extends Component{
    constructor() {
        super();
        this.state = {
            countries: [],
            inputValue: '',
            filteredCountries: [],
            countryName: null,
        };
        
    }
    componentDidMount() {
        // fetch(countriesData)      ///////// promise error///////////!!!
        // .then(res => JSON.parse(res))
        // .then(data => this.setState({
        //     countries: data,
        // }))

        this.setState({
            countries: countriesData,
        });
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.inputValue !== this.state.inputValue ) {
            if(this.state.inputValue.length > 2) {
                this.setState({
                    filteredCountries:this.state.countries.filter(item => {
                        return item.country.toLowerCase().includes(this.state.inputValue.toLowerCase()) 
                    })
                }) 
            } else {
                this.setState({
                    filteredCountries:[],
                })
            }          
        }
    }

    handleInputOnChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
        
    }

    handleCardChoose = (event) => {
        
            if(event.target.tagName == "IMG") {
                this.setState({
                    countryName: event.target.parentElement.children[1].innerText
                }) 
            } else if (event.target.tagName === "SPAN") {
                this.setState({
                    countryName: event.target.parentElement.children[1].innerText
                }) 
            } else if (event.target.tagName === "DIV") {
                this.setState({
                    countryName: event.target.children[1].innerText
                }) 
                
            }    
    }

    handleCardCloseBtn = () => {
        this.setState({
            countryName: null,
        })
    }
    render() {
        const {inputValue, countries, filteredCountries, countryName} = this.state;
        return (<>
          {!countryName? 
           <div className="mainDiv-Countries">
                <h1 className="h1-Countries">Countries</h1>
                <input 
                    className="input-Countries"
                    type={'text'}
                    onChange={(e) => this.handleInputOnChange(e)} 
                    value={inputValue}
                />
                <ListOfCountries 
                 filteredCountries={filteredCountries}
                  handleCardChoose={this.handleCardChoose}/>
            </div>
            :
            <CountryCard 
                handleCardCloseBtn={this.handleCardCloseBtn}
                countryName={countryName}
                countries={countries}
            />
          }
           </>
        )
    }
}

export default InputSearch;