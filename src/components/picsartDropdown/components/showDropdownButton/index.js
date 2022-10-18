import React, { useReducer} from "react";
import {initialState, ACTION_TYPE, reducer} from '../useReducer';
import styles from '../../style/index.css';
import Dropdown from '../dropDown';


function ShowDropdown () {  
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleIsVisible = () => {
         dispatch({type: ACTION_TYPE.TOGGLE_DROPDOWN })
    }

    return (    
        <div className="dropDownFrame" >
            { !state.isVisible && <button onClick={handleIsVisible} className='button'>{'show'}</button>}
            { state.isVisible && <Dropdown handleIsVisible={handleIsVisible} />}
        </div>
    )
};

export default ShowDropdown;
