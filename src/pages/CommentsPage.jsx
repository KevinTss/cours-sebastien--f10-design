import { NavLink } from "react-router-dom";

import useFetch from "../useFetch";
import Layout from "../components/Layout";

const CommentsPage = () => {
  const { datas: comments, isPending, error } = useFetch("comments");

  let errorElement = null;

  if (error) {
    errorElement = <div className="box">{error}</div>;
  }

  return (
    <Layout>
      <h1>All comments</h1>
      <NavLink to="/comments/new">New</NavLink>
      {isPending && <div>Loading...</div>}
      {errorElement}
      {comments &&
        comments.map((comment) => (
          <div key={comment.id}>
            <h4>{comment.name}</h4>
            {comment.body}
            <br />
            {comment.email}
            <br />
            <br />
          </div>
        ))}
    </Layout>
  );
};

export default CommentsPage;
