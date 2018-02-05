import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  //As the app mounts...
  componentWillMount() {
    this.fetchFruits();
    this.fetchFilters();
  }

  //it will fetch an array of fruits
  fetchFruits() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
      //feel like this should say fruitS but for purpose of passing tests...
  }

  //and an array of filters: [all, berry, others]
  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  //when you change the filter... i.e. from all to citrus...
  // <Filter /> -> <FruitBasket /> -> <App />
  updateFilterCallback = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    return (
      <FruitBasket
        //when FruitBasekt's prop updateFilterCallback gets called, it calls the App's updateFilterCallback
        updateFilterCallback={this.updateFilterCallback}
        currentFilter={this.state.currentFilter}
        filters={this.state.filters}
        fruit={this.state.fruit}
      />
    )
  }
}

export default App;
