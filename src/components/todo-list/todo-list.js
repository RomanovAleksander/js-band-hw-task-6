import React from 'react';
import TodoListItem from "../todo-list-item";

function TodoList({ todos, onDeleted, onToggleDone }) {
  const items = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <div key={id}>
        <TodoListItem
            { ...itemProps }
            onDeleted={() => onDeleted(id)}
            onToggleDone={() => onToggleDone(id)}
        />
      </div>
    );
  });

  return (
    <div className="todo-list">
      { items }
    </div>
  );
}

export default TodoList;
