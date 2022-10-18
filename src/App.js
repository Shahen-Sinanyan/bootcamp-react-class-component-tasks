import { Component } from 'react'
import { render } from '@testing-library/react';

 import Cardlist from './components/unmountingCardTracker/cardList';
 import MainAppCounter from './components/counterApp/mainCounterApp';
 import InputSearch from './components/searchDropdown/searchInput/index';

class App extends Component{

  render() {
    return(
      <Cardlist/>
     //<MainAppCounter/>
     // <InputSearch/>
      
    )
  }
}

export default App;
