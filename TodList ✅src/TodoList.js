import TodoItem from "./TodoItem";

function TodoList({ todos, onDelete }) {
  return todos.map((t) => <TodoItem todo={t} onDelete={onDelete} key={t.id} />);
}

export default TodoList;
