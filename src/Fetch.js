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

  async fetchProps() {
    this.title = this.props.profil.title
    this.url = this.props.profil.url
    this.infos = Object.values(this.props.profil.infos)
    console.log('fetchProps this.state :>> ', this.state);

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

  componentDidMount() {
    this.fetchProps()
  }

  componentDidUpdate(prevProps) {
    if (this.props.profil.title !== prevProps.profil.title) {
      // console.log('this.props.profil.title :>> ', this.props.profil.title);
      // console.log('prevProps.profil.title :>> ', prevProps.profil.title);
      console.log('DidUpdate this.props :>> ', this.props);
      this.fetchProps()
    }
  }

  render() {
    // console.log('this.state :>> ', this.state);
    return (
      <div>
        <h2>{this.title}</h2>
        {this.state.items.map((item) => <div key={item.id}>{this.mapProps(item)}<br /></div>)}
      </div>
    )
  }
}

export default Fetch;