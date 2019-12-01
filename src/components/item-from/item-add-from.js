import React from 'react';
import './item-add-from.css';

export default class ItemAddForm extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      description: '',
      priority: 'normal'
    };
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  };

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value
    })
  };

  onPriorityChange = (e) => {
    this.setState({
      priority: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state);
    this.setState({
      title: '',
      description: '',
      priority: 'normal'
    });
  };


  render() {
    const {title, description, priority} = this.state;
    const {isFormOpen, closeForm} = this.props;
    const isOpen = isFormOpen ? '' : ' display_none';

    return (
      <div className={`form-wrapper${isOpen}`}
           onSubmit={this.onSubmit}>
        <form className="form">
          <label htmlFor="title"> Title</label>
          <input required="" id="title" type="text"
                 className="title_input"
                 onChange={this.onTitleChange}
                 placeholder="Title"
                 value={title}/>
          <label htmlFor="description"> Description</label>
          <input type="text" className="description_input"
                 placeholder="Description"
                 id="description"
                 onChange={this.onDescriptionChange}
                 value={description}/>
          <label htmlFor="priority">Priority</label>
          <select className="change-priority" id="priority"
                  onChange={this.onPriorityChange}
                  value={priority}>
            <option value="normal">normal</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
          <div className="form__footer">
            <button type="button"
                    className="cancel-btn btn"
                    onClick={closeForm}>Cancel
            </button>
            <button type="submit"
                    className="button btn"
                    onClick={closeForm}>Save</button>
          </div>
        </form>
      </div>
    )
  }
}
