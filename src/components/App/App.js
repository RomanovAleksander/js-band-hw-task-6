import React from 'react';
import Header from "../Header";
import Search from "../Search";
import ItemFilter from "../ItemFilter";
import TodoList from "../TodoList";
import Footer from "../Footer";
import ItemForm from "../ItemForm";
import './app.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.setId = 1;
    this.index = 0;
    this.state = {
      todoData: [
        this.createTodoItem('test', 'test', 'normal'),
        this.createTodoItem('Todo', 'test', 'high')
      ],
      priority: 'all',
      completed: 'all',
      searchText: '',
      isFormOpen: false
    };
  }

  onSearchChange = (searchText) => {
    this.setState({searchText})
  };

  onFilterPChange = (priority) => {
    this.setState({priority})
  };

  onFilterCChange = (completed) => {
    this.setState({completed})
  };

  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, 'done': !oldItem.done};
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

  onToggleOpen = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = {...oldItem, 'showMenu': !oldItem.showMenu};
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

  search = (items, searchText) => {
    if (searchText === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.title
        .toLowerCase()
        .indexOf(searchText.toLowerCase()) > -1;
    });
  };

  openForm = () => {
    this.setState({isFormOpen: true});
  };

  closeForm = () => {
    this.setState({isFormOpen: false});
  };

  createTodoItem = (title, description, priority) => {
    return {
      title,
      description,
      priority,
      done: false,
      id: this.setId++,
      showMenu: false
    };
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];

      return {
        todoData: newArray
      }
    })
  };

  addItem = ({title, description, priority}) => {
    const newItem = this.createTodoItem(title, description, priority);
    this.setState(({todoData}) => {
      const newArray = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArray
      }
    });
  };

  filterByPriority = (items, priority) => {
    switch (priority) {
      case 'all':
        return items;
      case 'high':
        return items.filter((item) => item.priority === priority);
      case 'normal':
        return items.filter((item) => item.priority === priority);
      case 'low':
        return items.filter((item) => item.priority === priority);
      default:
        return items;
    }
  };

  filterByCompleted = (items, completed) => {
    switch (completed) {
      case 'all':
        return items;
      case 'done':
        return items.filter((item) => item.done);
      case 'open':
        return items.filter((item) => !item.done);
      default:
        return items;
    }
  };

  render() {
    const {
      todoData, searchText,
      priority, completed,
      isFormOpen
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
        <Header/>
        <main className="content">
          <div className="filter">
            <Search
              onSearchChange={this.onSearchChange}
            />
            <ItemFilter
              priority={priority}
              completed={completed}
              onFilterPChange={this.onFilterPChange}
              onFilterCChange={this.onFilterCChange}
              openForm={this.openForm}
            />
          </div>
          <TodoList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onToggleOpen={this.onToggleOpen}
            onToggleEdit={this.openForm}
          />
          <ItemForm
            isFormOpen = {isFormOpen}
            closeForm = {this.closeForm}
            onAdded={this.addItem}
          />
        </main>
        <Footer />
      </div>
    );
  }
}
