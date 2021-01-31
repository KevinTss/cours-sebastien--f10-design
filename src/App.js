import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    albums: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((albumsList) => {
        console.log(albumsList);
        this.setState({ albums: albumsList });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.albums.map((album) => (
          <div key={album.id}>{album.title}</div>
        ))}
      </React.Fragment>
    );
  }
}

export default App;
