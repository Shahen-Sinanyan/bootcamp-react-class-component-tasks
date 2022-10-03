import { Component } from 'react';

import Counter from '../counter'

class MainAppCounter extends Component {
  constructor(){
    super();
    this.state = {
      inputMinValue: '',
      inputMaxValue: Infinity,
      step: 1,
    }
  }

  componentDidMount() {
    const inputMinValue = localStorage.getItem('inputMinValue');
    const inputMaxValue = localStorage.getItem('inputMaxValue');
    const step = localStorage.getItem('step');
    this.setState({
      inputMinValue: inputMinValue,
      inputMaxValue: inputMaxValue,
      step: step,
    })
  }

  componentDidUpdate() {
    const {inputMinValue, inputMaxValue, step} = this.state;
    localStorage.setItem('inputMinValue',inputMinValue);
    localStorage.setItem('inputMaxValue',inputMaxValue);
    localStorage.setItem('step',step);
    //localStorage.setItem('state', JSON.stringify(this.state))
  }

  handleInputMinValue = (event) => {
   this.setState({
    inputMinValue: event.target.value
   })
  }

  handleInputMaxValue = (event) => {
    this.setState({
      inputMaxValue : event.target.value
    }) 
  }

  handleStep = (event) => {
    this.setState({
      step: (+event.target.value >= 0 ?  event.target.value: '')
    })
  }

  handleReset = () => {
    this.setState({
      inputMinValue: 0,
      inputMaxValue: Infinity,
      step: 1,
    })
  }

  render () {
    const { inputMinValue, inputMaxValue, step } = this.state;
    return(
        <>
        <h1>Counter</h1>
        <div  className='mainDiv'>
          <div className='mainDiv-child'>
            <button onClick={this.handleReset} className={'reset'}>Reset all</button>           
              <input className='counterInput' onChange={this.handleInputMaxValue} value={inputMaxValue} type='number' placeholder='enter max value'/>

              <input className='counterInput' onChange={this.handleInputMinValue} value={inputMinValue} type='number' placeholder='current min value is 0'/>
             
              <input className='counterInput3' onChange={this.handleStep} value={step} type='number' id='minValue' placeholder='Step = 0'/>            
          </div>
          <div className='mainDiv-child'>
            <Counter minValue={Number(inputMinValue)} maxValue={Number(inputMaxValue)} step={Number(step)}/>
            <Counter minValue={Number(inputMinValue)} maxValue={Number(inputMaxValue)} step={Number(step)}/>
            <Counter minValue={Number(inputMinValue)} maxValue={Number(inputMaxValue)} step={Number(step)}/>
          </div>
        </div> 
        </>    
    )
  }
}

export default MainAppCounter;
