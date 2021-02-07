import './App.css'
import Navigation from './Navigation'
import Fetch from './Fetch'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router
      // forceRefresh={true}
    >
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/posts' >
            <Fetch profil={posts} />
          </Route>
          <Route path='/comments' >
            <Fetch profil={comments} />
          </Route>
          <Route path='/albums' >
            <Fetch profil={albums} />
          </Route>
          <Route path='/todos' >
            <Fetch profil={todos} />
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

const posts = {
  title: 'Posts',
  url: 'https://jsonplaceholder.typicode.com/posts',
  infos: {
    title: 'title',
    body: 'body'
  }
}

const comments = {
  title: 'Comments',
  url: 'https://jsonplaceholder.typicode.com/comments',
  infos: {
    name: 'name',
    email: 'email'
  }
}

const albums = {
  title: 'Albums',
  url: 'https://jsonplaceholder.typicode.com/albums',
  infos: {
    title: 'title',
  }
}

const todos = {
  title: 'Todos',
  url: 'https://jsonplaceholder.typicode.com/todos',
  infos: {
    title: 'title',
    completed: 'completed',
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
