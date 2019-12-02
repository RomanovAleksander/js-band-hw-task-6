import React from "react";

import Header from "../Header";
import Search from "../Search";
import ItemFilter from "../ItemFilter";
import TodoList from "../TodoList";
import Footer from "../Footer";
import ItemForm from "../ItemForm";

import "../../styles/styles.scss";

export default class App extends React.Component {
  constructor() {
    super();
    this.setId = 1;
    this.state = {
      todoData: [this.createItem("HW6", "Use bootstrap", "high")],
      priority: "all",
      completed: "all",
      searchText: "",
      isFormOpen: false,
      item: null
    };
  }

  onSearchChange = searchText => {
    this.setState({ searchText });
  };

  onPriorityChange = priority => {
    this.setState({ priority });
  };

  onStatusChange = completed => {
    this.setState({ completed });
  };

  openForm = () => {
    this.setState({ isFormOpen: true });
  };

  closeForm = () => {
    this.setState({ isFormOpen: false, item: null });
  };

  toggleProperty = (arr, id, propName, closeMenu) => {
    const isClose = closeMenu ? false : true;
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
      'showMenu': isClose
    };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done", true)
      };
    });
  };

  onToggleOpen = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "showMenu", false)
      };
    });
  };

  findItem = id => {
    const { todoData } = this.state;
    return todoData.find(el => el.id === id);
  };

  onEdit = id => {
    const item = this.findItem(id);
    item.showMenu = false;
    this.openForm();
    this.setState({ item });
  };

  createItem = (title, description, priority) => {
    return {
      title,
      description,
      priority,
      done: false,
      id: this.setId++,
      showMenu: false
    };
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];

      return {
        todoData: newArray
      };
    });
  };

  addItem = ({ title, description, priority }) => {
    const newItem = this.createItem(title, description, priority);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];

      return {
        todoData: newArray
      };
    });
  };

  updateItem = ({ title, description, priority, id }) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {
        ...oldItem,
        'title': title,
        'description': description,
        'priority': priority
      };
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  filterByPriority(items, priority) {
    switch (priority) {
      case "all":
        return items;
      case "high":
        return items.filter(item => item.priority === priority);
      case "normal":
        return items.filter(item => item.priority === priority);
      case "low":
        return items.filter(item => item.priority === priority);
      default:
        return items;
    }
  }

  filterByCompleted(items, completed) {
    switch (completed) {
      case "all":
        return items;
      case "done":
        return items.filter(item => item.done);
      case "open":
        return items.filter(item => !item.done);
      default:
        return items;
    }
  }

  search(items, searchText) {
    if (searchText === 0) {
      return items;
    }
    return items.filter(item => {
      return item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }

  render() {
    const {
      todoData,
      searchText,
      priority,
      completed,
      isFormOpen,
      item
    } = this.state;
    const visibleBySearchAndPriority = this.filterByPriority(
      this.search(todoData, searchText),
      priority
    );
    const visibleItems = this.filterByCompleted(
      visibleBySearchAndPriority,
      completed
    );

    return (
      <div className="wrapper">
        <Header />
        <main className="content">
          <div className="filter">
            <Search onSearchChange={this.onSearchChange} />
            <ItemFilter
              priority={priority}
              completed={completed}
              onPriorityChange={this.onPriorityChange}
              onStatusChange={this.onStatusChange}
              openForm={this.openForm}
            />
          </div>
          <TodoList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onToggleOpen={this.onToggleOpen}
            onToggleEdit={this.onEdit}
          />
          {isFormOpen && (
            <ItemForm
              todo={item}
              isFormOpen={isFormOpen}
              closeForm={this.closeForm}
              onAdded={this.addItem}
              onUpdated={this.updateItem}
            />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}
