import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// const FruitBasket = (props) =>
//     <div className="fruit-basket">
//       <Filter
//         handleChange={props.handleFilterChange}
//         filters={props.filters}
//       />
//       <FilteredFruitList
//         filter={props.selectedFilter}
//         fruit={props.fruit}
//       />
//     </div>

const FruitBasket = ({updateFilterCallback, filters, currentFilter, fruit}) =>
    <div className="fruit-basket">
      <Filter
        handleChange={updateFilterCallback}
        filters={filters}
      />
      <FilteredFruitList
        filter={currentFilter}
        fruit={fruit}
      />
    </div>

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
};

export default FruitBasket;


// class FruitBasket extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }
//
//   // handleFilterChange = event => {
//   //   console.log('new filter: ', event.target.value);
//   //   this.setState({ selectedFilter: event.target.value });
//   // }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter
//           handleChange={this.state.handleFilterChange}
//         />
//         <FilteredFruitList
//           filter={this.state.selectedFilter}
//         />
//       </div>
//     );
//   }
// }

// export default FruitBasket;
