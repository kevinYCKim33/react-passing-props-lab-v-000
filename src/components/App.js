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

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
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
        filters={this.state.filters}
      />
    )
  }
}

export default App;
