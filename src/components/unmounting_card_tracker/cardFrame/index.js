import { Component } from 'react';

import CardInfo from '../cardInfo'
import CardShow from '../cardShow'

class CardFrame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: true,
        }
    }

    handleClose = () => {
        this.setState({
            isVisible : !this.state.isVisible,
        })
    }

    handleShow = () => {
        this.setState({
            isVisible : !this.state.isVisible,
        })
    }
   

    render() {
        const {cardN, handleCardUnmounted} = this.props;
        const { isVisible } = this.state;
        return(
            isVisible?
             <CardInfo 
                 cardN={cardN}
                 handleClose={this.handleClose} 
                 handleCardUnmounted= {handleCardUnmounted}
             /> 
             : 
             <CardShow handleShow={this.handleShow}/>

        )
    }
}

export default CardFrame;