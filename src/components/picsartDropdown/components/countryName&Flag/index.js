import React from "react";

function Country ({flag, title}) {

    return(
        <div className="country">
            <img className='flag' src={flag} alt='flag'/>
            <span>{title}</span>
        </div>
    )
}

export default Country;