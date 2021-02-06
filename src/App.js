import './App.css'
import Navigation from './Navigation'
import Albums from './Albums'
import Fetch from './Fetch'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/albums' >
            <Albums />
          </Route>
          <Route path='/users' >
            <Fetch url={users.url} infos={users.infos} />
          </Route>
          <Route path='/' >
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const users = {
  url: 'https://jsonplaceholder.typicode.com/users',
  // infos: ['name', 'email']
  infos: {
    name: 'name',
    email: 'email'
  }

}

const Home = () => (
  <div>
    <h1>&#x7B;JSON&#x7D; Placeholder</h1>
    <p>Free fake API for testing and prototyping.</p>
  </div>
)

const Error = () => (
  <div>
    <h1>404 Error</h1>
  </div>
)

export default App;
