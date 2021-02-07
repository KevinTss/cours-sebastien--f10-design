import React, { Component } from 'react';

class Fetch extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
    this.title = props.profil.title
    this.url = props.profil.url
    this.infos = Object.values(props.profil.infos)
  }

  mapProps(item) {
    return this.infos.map((prop) => (<span key={prop}>{item[prop]}<br /></span>))
  }

  async componentDidMount() {
    // console.log('this.infos :>> ', this.infos);
    console.log('this.props :>> ', this.props);
    try {
      const response = await fetch(this.url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const resJson = await response.json()
      this.setState({ items: resJson });

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h2>{this.title}</h2>
        {this.state.items.map((item) => <div key={item.id}>{this.mapProps(item)}<br /></div>)}
      </div>
    )
  }
}

export default Fetch;