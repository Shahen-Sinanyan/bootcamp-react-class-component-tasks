import { Component } from "react";

class CardShow extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { handleShow } = this.props;
        return (
             <div className='hiddenCard'>
                 <button onClick={handleShow} className='button'>Show</button>
            </div>
        )
    }
}

export default CardShow;