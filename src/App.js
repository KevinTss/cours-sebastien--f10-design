import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./Navigation";
import Fetch from "./Fetch";
import PostsPage from "./pages/Post";

function App() {
  return (
    <Router
    // forceRefresh={true}
    >
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Navigation />
            <Home />
          </Route>
          <Route path="/posts">
            <PostsPage />
          </Route>
          <Route path="/comments">
            <Navigation />
            <Fetch profil={comments} />
          </Route>
          <Route path="/albums">
            <Navigation />
            <Fetch profil={albums} />
          </Route>
          <Route path="/todos">
            <Navigation />
            <Fetch profil={todos} />
          </Route>
          <Route path="/users">
            <Navigation />
            <Fetch profil={users} />
          </Route>
          <Route path="/">
            <Navigation />
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const posts = {
  url: "https://jsonplaceholder.typicode.com/posts",
};

const comments = {
  title: "Comments",
  url: "https://jsonplaceholder.typicode.com/comments",
  infos: {
    name: "name",
    email: "email",
  },
};

const albums = {
  title: "Albums",
  url: "https://jsonplaceholder.typicode.com/albums",
  infos: {
    title: "title",
  },
};

const todos = {
  title: "Todos",
  url: "https://jsonplaceholder.typicode.com/todos",
  infos: {
    title: "title",
    completed: "completed",
  },
};

const users = {
  title: "Users",
  url: "https://jsonplaceholder.typicode.com/users",
  infos: {
    name: "name",
    website: "website",
    phone: "phone",
  },
};

const Home = () => (
  <div>
    <h1>&#x7B;JSON&#x7D; Placeholder</h1>
    <p>Free fake API for testing and prototyping.</p>
  </div>
);

const Error = () => (
  <div>
    <h1>404 Error</h1>
  </div>
);

export default App;
