import { useState } from "react";

function TodoList() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function hanndleSubmit(e) {
    e.preventDefault();

    setTodos([
      ...todos,
      {
         id: crypto.random
      },
    ]);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-new">
          <label htmlFor="item">New item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}

export default TodoList;
