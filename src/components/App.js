import React from 'react';

import FruitBasket from './FruitBasket';

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

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  // selectedFilter

  render() {
    return (
      <FruitBasket
        handleFilterChange={this.handleFilterChange}
        selectedFilter={this.state.currentFilter}
      />
    )
  }
}

export default App;
