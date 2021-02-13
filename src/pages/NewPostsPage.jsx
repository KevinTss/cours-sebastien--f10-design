import { NavLink } from "react-router-dom";

import ActionLayout from "../components/ActionLayout";

const PostsPage = () => {
  return (
    <ActionLayout>
      <h1>Create new post</h1>
      <form>
        <input type="text" placeholder="title" />
        <input type="text" placeholder="description" />
        <input type="submit" value="Submit" />
      </form>
    </ActionLayout>
  );
};

export default PostsPage;
