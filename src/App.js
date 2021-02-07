import './App.css'
import Navigation from './Navigation'
import Fetch from './Fetch'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router
      forceRefresh={true}
    >
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/albums' >
            <Fetch profil={albums} />
          </Route>
          <Route path='/users' >
            <Fetch profil={users} />
          </Route>
          <Route path='/' >
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const albums = {
  title: 'Albums',
  url: 'https://jsonplaceholder.typicode.com/albums',
  infos: {
    title: 'title',
  }
}

const users = {
  title: 'Users',
  url: 'https://jsonplaceholder.typicode.com/users',
  infos: {
    name: 'name',
    website: 'website',
    phone: 'phone',
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
