import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

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
      <>
        <nav>
          <a href="/">home</a>
          <a href="/albums">albums</a>
        </nav>
        <nav>
          <Link to="/">home</Link>
          <Link to="/albums">albums</Link>
        </nav>
        <Switch>
          <Route path="/albums">
            {this.state.albums.map((album) => (
              <div key={album.id}>{album.title}</div>
            ))}
          </Route>
          <Route path="/">
            <div>Home page</div>
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
