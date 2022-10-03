import { Component } from "react";

import closeIcon from '../assets/close.png';

class CardInfo extends Component {
 constructor(props) {
    super(props);
 }

 componentWillUnmount() {
    const {handleCardUnmounted, cardN} = this.props;
    handleCardUnmounted(cardN)
 }
 render () {
   const {cardN, handleClose} = this.props
    return (
        <div className='card'>
            <img 
                onClick={handleClose}
                src = {closeIcon}
                className='close'
            />
            <span className='number'>{cardN}</span>
       </div>
    )
 }
}

export default CardInfo;