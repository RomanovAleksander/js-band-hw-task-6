import React, { Component } from 'react';

export default class ItemFilter extends Component{
  constructor() {
    super();
    this.state = {
      priority: 'all',
      completed: 'all'
    };
    this.onFilterPChange = this.onFilterPChange.bind(this);
    this.onFilterCChange = this.onFilterCChange.bind(this);
  }

  onFilterPChange(e) {
    const {onFilterPChange} = this.props;
    const priority = e.target.value;
    this.setState({priority});
    onFilterPChange(priority);
  }

  onFilterCChange(e) {
    const {onFilterCChange} = this.props;
    const completed = e.target.value;
    this.setState({completed});
    onFilterCChange(completed);
  }

  render() {
    const {priority, completed} = this.state;

    return (
      <div>
        <div className="filter__item">
          <select className="select-status select"
                  key="status"
                  onChange={this.onFilterCChange}
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
                  onChange={this.onFilterPChange}
                  value={priority}
          >
            <option value="all">all</option>
            <option value="high">high</option>
            <option value="normal"> normal</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="filter__item">
          <button className="filter__create-btn btn" type="button">Create</button>
        </div>
      </div>
    );
  }
}
