import React, { Component } from 'react';

class Albums extends Component {
  state = { items: [] }

  async componentDidMount() {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const resJson = await response.json()
      this.setState({ items: resJson });
      console.log(this.state);

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h2>Albums</h2>
        {this.state.items.map((item) => <div key={item.id}>{item.title}</div>)}
      </div>
    )
  }
}

export default Albums;