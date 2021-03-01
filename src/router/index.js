import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import PostsPage from "../pages/PostsPage";
import CommentsPage from "../pages/CommentsPage";
import AlbumsPage from "../pages/AlbumsPage";
import PhotosPage from "../pages/PhotosPage";
import TodoPage from "../pages/TodoPage";
import UsersPage from "../pages/UsersPage";
import NewPostsPage from "../pages/NewPostsPage";
import NewCommentPage from "../pages/NewCommentPage";

const Error = () => (
  <div>
    <h1>404 Error</h1>
  </div>
);

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/posts">
        <PostsPage />
      </Route>
      <Route exact path="/posts/new">
        <NewPostsPage />
      </Route>
      <Route path="/todo">
        <TodoPage />
      </Route>
      <Route path="/users">
        <UsersPage />
      </Route>
      <Route path="/">
        <Error />
      </Route>
    </Switch>
  );
};

export default Router;
