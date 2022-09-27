import { useState } from "react";

function AddTodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    onAdd(title);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input value={title} onChange={onChangeTitle} />
      <input type="submit" />
    </form>
  );
}

export default AddTodoForm;
