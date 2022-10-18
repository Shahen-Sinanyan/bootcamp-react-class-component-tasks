import React, {useEffect, useRef, useReducer} from "react";
import {initialState, ACTION_TYPE, reducer} from '../useReducer';
import Country from "../countryName&Flag";

function Dropdown ({handleIsVisible}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const dropdownRef = useRef();
    
   useEffect(()=> {
    const handleOutSideTarget = (event) => {
        if(!dropdownRef.current?.contains(event.target)) {
            handleIsVisible()
        }
    }
    window.addEventListener('mousedown',handleOutSideTarget);
    return (() => window.removeEventListener('mousedown', handleOutSideTarget));
   },[]);
   
    const handleInputOnChangeAndSearch = (e) => {
        dispatch({type: ACTION_TYPE.INPUT_VALUE, payload: e.target.value})

        if (state.inputValue.length >= 2) {
            dispatch({type: ACTION_TYPE.FILTERED_DATA});
        } else if (state.inputValue.length < 2) {
            dispatch({type: ACTION_TYPE.FILTERED_DATA_DEFAULT});
        }  
    }
    return(
        <div  className="mainContainer" ref={dropdownRef}>
            <input 
                className='input'
                type='text'
                value={state.inputValue} 
                onChange={(e)=> handleInputOnChangeAndSearch(e)}/>
            <div>
              {
                state.filteredData.map(item => <Country key={item.country} flag={item.flag} title={item.country}/> )
              }
            </div>
        </div>
    );
}

export default Dropdown;