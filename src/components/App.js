import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }

  updateFilter = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ selectedFilter: event.target.value });
  }


  render(){
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onUpdateFilter={this.updateFilter}
      />
    );
  }
}

export default App;
