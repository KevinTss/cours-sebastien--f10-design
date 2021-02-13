import useFetch from "../useFetch";

const CommentsPage = () => {
  const {datas: comments, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/comments')

  return (
    <div>
      <h1>All comments</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {comments &&
        comments.map((comment) => (
          <div key={comment.id}>
            <h4>{comment.name}</h4>
            {comment.body}<br/>
            {comment.email}<br/>
            <br/>
          </div>
        ))}
    </div>
  );
};

export default CommentsPage;
