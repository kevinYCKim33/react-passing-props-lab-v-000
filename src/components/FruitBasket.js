import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

// Fruit Basket is a Component that takes in these four props
const FruitBasket = ({updateFilterCallback, filters, currentFilter, fruit}) =>
    <div className="fruit-basket">
      <Filter
        //when Filter's handleChange prop gets called, it calls FruitBasket's updateFilterCallback
        //<FruitBasket /> resides inside App
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

// ALTERNATE WAY TO WRITE ABOVE CODE PASSING IN PROPS...A BIT MORE VERBOSE
// BUT A LITTLE MORE READABLE FOR BEGINNERS LIKE ME
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


// A STATE VERSION OF MY CODE ABOVE, AS WAS GIVEN TO ME TO START THE LAB.
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
