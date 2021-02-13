import useFetch from "../useFetch";

const PostsPage = () => {
  const {datas: posts, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/posts')

  return (
    <div>
      <h1>All posts</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            {post.body}<br/>
            <br/>
          </div>
        ))}
    </div>
  );
};

export default PostsPage;
