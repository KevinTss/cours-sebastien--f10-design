import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    albums: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then(albumsList => {
        console.log(albumsList)
        this.setState({ albums: albumsList });
      });
  }

  componentWillUnmount() {
    // make fetch request
  }

  render() {
    return (
      // <ul>
      //   {this.state.albums.map((album) => (
      //     <li key={album.id}>{album.title}</li>
      //   ))}
      // </ul>
      <React.Fragment>
        {this.state.albums.map((album) => (
          <div key={album.id}>{album.title}</div>
        ))}
      </React.Fragment>
    )
  }
}


export default App;
