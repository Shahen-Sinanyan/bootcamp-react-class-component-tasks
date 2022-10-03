import { Component } from 'react'
import { render } from '@testing-library/react';

import Cardlist from './components/unmounting_card_tracker/cardList';
import MainAppCounter from './components/counterApp/mainAppCounter';
import InputSearch from './components/searchDropdown/searchInput/index';

class App extends Component{

  render() {
    return(
      //<Cardlist/>
      //<MainAppCounter/>
      <InputSearch/>
    )
  }
}

export default App;
