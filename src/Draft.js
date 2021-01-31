import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("--constructor--", props);
  }

  // utiliser componentDidMount()
  // pour recuperer les données de JSON place holder: https://jsonplaceholder.typicode.com/
  // Et de les ajouter au state
  // et de les afficher dans le render

  render() {
    console.log("--render--");
    return <div className="App">Welcome</div>;
  }
}

export default App;
