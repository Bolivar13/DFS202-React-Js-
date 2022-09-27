import { useState } from "react";
import "./App.css";

import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Todo1" },
    { id: 2, title: "Todo2" },
    { id: 3, title: "Todo3" },
    { id: 4, title: "Todo4" },
  ]);
  /**
   * 4adi t crie todo jdida ou 4adi tzidha f stat dial todos
   * @param {String} title new todo title
   */
  const addTodo = (title) => {
    console.log("Add Todo ", title);
    let id = 1;
    if (todos.length) {
      id = todos[todos.length - 1].id + 1;
    }
    setTodos([
      ...todos,
      {
        id,
        title,
      },
    ]);
  };
  /**
   * 4adi tms7 todo lli 3ndha hadak l'ID mn todos
   * @param {Number} id dial todo
   */
  const deleteTodo = (id) => {
    console.log("Delete Todo", id);
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
