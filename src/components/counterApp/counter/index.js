import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:  this.props.minValue//this.props.minValue
        }
        this.handleIncrease =  this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

     componentDidUpdate(prevProps, prevState) {
         if(prevProps.minValue !== this.props.minValue) {  
             this.setState({count: this.props.minValue});
         }
        
    }
   
    handleIncrease () {
        this.setState({
            count: this.state.count + this.props.step,
        })

    }

    handleDecrease () {
        this.setState({
            count: this.state.count - this.props.step,
        })

    }

    render() {
        const {state: {count}} = this;
        const {props : {maxValue, minValue}} = this; 
        return(
            <div className="counter">
                <p className="countText">count: 
                     {(count > maxValue? 
                        maxValue
                        : 
                        (count < minValue? minValue: count))}
                     </p>
                <button className={'countBtn'} disabled={count >= maxValue? true: false} onClick={this.handleIncrease}>Increase (+)</button>
                <button className={'countBtn'} disabled={count <= this.props.minValue? true: false } onClick={this.handleDecrease}>Decrease (-)</button>
            </div>
        )
    }
}

export default Counter;