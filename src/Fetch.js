import React, { Component } from 'react';

class Fetch extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
    this.url = props.url
    // console.log(this.props);
    this.infos = {
      name: 'name',
      email: 'email'
    }
    // this.x = eval("item.name")

    // this.infos2 = this.infos.map((item) => ('item.'.concat(item)))
  }

  // map2 (item) {
  //   const infos = ["name", "email"]
  //   for (const i of infos) {
  //     return <div key={item.id}>{item.i}</div>
  //   }
  //   const infos2 = infos.map((item) =>('item.'.concat(item)))
  //   // infos2 = ["item.name", "item.email"]
  // }

  async componentDidMount() {
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const resJson = await response.json()
      this.setState({ items: resJson });
      // console.log(this.state);

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    // console.log(this.infos2);
    console.log('this.props :>> ', this.props);
    return (
      <div>
        <h2>Users</h2>
        {this.state.items.map((item) => <div key={item.id}>{item.name}<br />{item.website}<br />{item.phone}<br /><br /></div>)}
        {/* {this.state.items.map((item) => <div key={item.id}>{item.this.infos[0]}</div>)} */}
      </div>
    )
  }
}

export default Fetch;