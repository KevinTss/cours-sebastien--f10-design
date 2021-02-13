import useFetch from "../useFetch";

const TodosPage = () => {
  const {datas: todos, isPending, error} = useFetch('https://jsonplaceholder.typicode.com/todos')

  return (
    <div>
      <h1>All todos</h1>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <h4>User id : {todo.userId}</h4>
            {todo.title}<br/>
            {!todo.completed && <span>Task to complete<br/></span>}
            {todo.completed && <span>Task done<br/></span>}
            <br/>
          </div>
        ))}
    </div>
  );
};

export default TodosPage;
