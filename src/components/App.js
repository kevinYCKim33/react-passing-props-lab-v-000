import React from 'react';

// import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  render() {
    return (
      'hey there'
    )
  }
}

export default App;
