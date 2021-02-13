import useFetch from "../useFetch";
import Layout from "../components/Layout";

const PostsPage = () => {
  const { datas: posts, isPending, error } = useFetch("posts");

  return (
    <Layout>
      <h1>All posts</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            {post.body}
            <br />
            <br />
          </div>
        ))}
    </Layout>
  );
};

export default PostsPage;
