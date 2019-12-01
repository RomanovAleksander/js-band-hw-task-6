import React from 'react';
import './todo-list-item.css';

export default function TodoListItem(props) {
  const {
    title, description, priority, done,
    showMenu, onDeleted, onToggleDone,
    onToggleOpen, onToggleEdit
  } = props;
  let classNames = 'todo';
  const isDone = done ? '' : ' display_none';
  const isShow = showMenu ? '' : ' display_none';
  if (done) {
    classNames += ' done';
  }

  return (
    <div className={classNames}>
      <div className={`todo__check ${isDone}`}>✔</div>
      <h3 className="todo__title">{title}</h3>
      <div className="todo__description">{description}</div>
      <div className="todo__footer">
        <div className="todo__priority">{priority}</div>
        <div className="todo__button btn"
             onClick={onToggleOpen}>
          ...
        </div>
        <div className={`todo__menu ${isShow}`}>
          <div className="todo__menu-item task-done"
               onClick={onToggleDone}>
            done
          </div>
          <div className="todo__menu-item task-edit"
               onClick={onToggleEdit}>
            edit
          </div>
          <div className="todo__menu-item task-delete"
               onClick={onDeleted}>
            delete
          </div>
        </div>
      </div>
    </div>
  )
}
