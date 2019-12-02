import React, { Component } from 'react';

export default class ItemFilter extends Component{
  constructor() {
    super();
    this.state = {
      priority: 'all',
      completed: 'all'
    };
  }

  handlePriorityChange = ({ target }) => {
    const {onPriorityChange} = this.props;
    const priority = target.value;
    this.setState({priority});
    onPriorityChange(priority);
  };

  handleStatusChange = ({ target }) => {
    const {onStatusChange} = this.props;
    const completed = target.value;
    this.setState({completed});
    onStatusChange(completed);
  };

  render() {
    const {priority, completed} = this.state;
    const {openForm} = this.props;

    return (
      <React.Fragment>
        <div className="filter__item">
          <select className="select-status select"
                  key="status"
                  onChange={this.handleStatusChange}
                  value={completed}
          >
            <option value="all">all</option>
            <option value="open">open</option>
            <option value="done">done</option>
          </select>
        </div>
        <div className="filter__item">
          <select className="select-priority select"
                  key="priority"
                  onChange={this.handlePriorityChange}
                  value={priority}
          >
            <option value="all">all</option>
            <option value="high">high</option>
            <option value="normal"> normal</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="filter__item">
          <button className="filter__create-btn btn"
                  type="button"
                  onClick={openForm}>Create</button>
        </div>
      </React.Fragment>
    );
  }
}
