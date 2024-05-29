import React from "react";
function TodoList({ todos, onAddTodo, onTodoToggle }) {
  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      onAddTodo(event.target.value);
      event.target.value = "";
    }
  };
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {todo.completed ? "(completed)" : ""}
          <button onClick={() => onTodoToggle(todo.id)}>Toggle</button>
        </li>
      ))}
      <li>
        <input
          type="text"
          placeholder="Add Todo"
          onKeyDown={handleInputKeyDown}
        />
      </li>
    </ul>
  );
}
export default TodoList;
