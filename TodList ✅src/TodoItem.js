function TodoItem({ todo, onDelete }) {
  const onClickDelete = (e) => {
    onDelete(todo.id);
  };
  return (
    <div className="todo-list">
      <div className="todo">
        <div>{todo.title}</div>
        <button onClick={onClickDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
