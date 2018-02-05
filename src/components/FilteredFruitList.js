import React, { Component } from 'react';

// ALTERNATE START TO LINE 8
// FilteredFruitList = (props) => {}
// props.filter, props.fruit
// or pass in specific props directly like below

const FilteredFruitList = ({filter, fruit}) => {
  const list = !filter || filter === 'all' ? fruit : fruit.filter(i => i.fruit_type === filter);
  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  )
}

FilteredFruitList.defaultProps = {
  filter: null,
  fruit: []
}

export default FilteredFruitList;


// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }
//
//   // componentDidMount() {
//   //   fetch('/api/fruit')
//   //     .then(response => response.json())
//   //     .then(items => this.setState({ items }));
//   // }
//
//   render() {
//     const list = !this.props.filter || this.props.filter === 'all' ? this.props.items : this.props.items.filter(i => i.fruit_type === this.props.filter);
//
//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }
