import React from 'react';
import AppHeader from "../app-header";
import Search from "../search";
import ItemFilter from "../item-filter";
import TodoList from "../todo-list";
import Footer from "../footer";
import ItemAddForm from "../item-from";
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
      isFormOpen: false,
      editedItem: []
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.AddItem = this.AddItem.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onFilterPChange = this.onFilterPChange.bind(this);
    this.onFilterCChange = this.onFilterCChange.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.search = this.search.bind(this);
    this.onToggleOpen = this.onToggleOpen.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  onSearchChange(searchText) {
    this.setState({searchText})
  }

  onFilterPChange(priority) {
    this.setState({priority})
  }

  onFilterCChange(completed) {
    this.setState({completed})
  }

  onToggleDone(id) {
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
  }

  onToggleOpen(id) {
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
  }

  search(items, searchText) {
    if (searchText === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.title
        .toLowerCase()
        .indexOf(searchText.toLowerCase()) > -1;
    });
  }

  openForm() {
    this.setState({isFormOpen: true});
  }

  closeForm() {
    this.setState({isFormOpen: false});
  }

  createTodoItem(title, description, priority) {
    return {
      title,
      description,
      priority,
      done: false,
      id: this.setId++,
      showMenu: false
    };
  }

  deleteItem(id) {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];

      return {
        todoData: newArray
      }
    })
  }

  AddItem({title, description, priority}) {
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
  }

  filterByPriority(items, priority) {
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
  }

  filterByCompleted(items, completed) {
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
  }

  render() {
    const {
      todoData, searchText,
      priority, completed,
      isFormOpen} = this.state;
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
        <AppHeader/>
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
          <ItemAddForm
            editedItem={this.editedItem}
            isFormOpen = {isFormOpen}
            closeForm = {this.closeForm}
            onAdded={this.AddItem}
          />
        </main>
        <Footer />
      </div>
    );
  }
}
