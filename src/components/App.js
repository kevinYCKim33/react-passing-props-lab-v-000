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

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
      //feel like this should say fruitS but for purpose of passing tests...
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

  // const list = !this.state.currentFilter || this.state.currentFilter === 'all' ? this.state.fruit : this.state.fruit.filter(i => i.fruit_type === this.state.currentFilter);
  // const list = !props.filter || props.filter === 'all' ? props.items : props.items.filter(i => i.fruit_type === props.filter);


  // selectedFilter

  render() {
    return (
      <FruitBasket
        handleFilterChange={this.handleFilterChange}
        selectedFilter={this.state.currentFilter}
        filters={this.state.filters}
        items={this.state.fruit}
      />
    )
  }
}

export default App;
