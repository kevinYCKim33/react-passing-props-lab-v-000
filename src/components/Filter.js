import React from 'react';

const Filter = (props) =>
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>

Filter.defaultProps = {
  filters: ['berry', 'pepo', 'pome', 'citrus','drupe','other'],
  handleChange: 'some arbitrary function'
}

export default Filter;



// class Filter extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: []
//     };
//   }
//
//   componentWillMount() {
//     this.fetchFilters();
//   }
//
//   fetchFilters = () => {
//     fetch('/api/fruit_types')
//       .then(response => response.json())
//       .then(filters => this.setState({ filters }));
//   }
//
//   render() {
//     return (
//       <select onChange={this.props.handleChange} defaultValue='all'>
//         <option value='all'>All</option>
//         {this.props.filters.map(filter =>
//           <option key={filter} value={filter}>{filter}</option>
//         )}
//       </select>
//     );
//   }
// }

// export default Filter;
