import React from "react";

export default class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.default = {
      title: "",
      description: "",
      priority: "normal"
    };
    this.state = props.todo || this.default;
  }

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  onPriorityChange = e => {
    this.setState({
      priority: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.props.todo) {
      this.props.onUpdated(this.state);
    } else {
      this.props.onAdded(this.state);
    }
    this.setState({ ...this.default });
    this.props.closeForm();
  };

  render() {
    const { title, description, priority } = this.state;
    const { isFormOpen, closeForm } = this.props;
    const isOpen = isFormOpen ? "" : " display_none";

    return (
      <div className={`form-wrapper${isOpen}`} onSubmit={this.onSubmit}>
        <form className="form">
          <label htmlFor="title"> Title</label>
          <input
            required=""
            id="title"
            type="text"
            className="title_input"
            onChange={this.onTitleChange}
            placeholder="Title"
            value={title}
          />
          <label htmlFor="description"> Description</label>
          <input
            type="text"
            className="description_input"
            placeholder="Description"
            id="description"
            onChange={this.onDescriptionChange}
            value={description}
          />
          <label htmlFor="priority">Priority</label>
          <select
            className="change-priority"
            id="priority"
            onChange={this.onPriorityChange}
            value={priority}
          >
            <option value="normal">normal</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
          <div className="form__footer">
            <button
              type="button"
              className="cancel-btn btn"
              onClick={closeForm}
            >
              Cancel
            </button>
            <button type="submit" className="button btn">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
