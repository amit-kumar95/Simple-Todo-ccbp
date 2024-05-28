import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = () => {
    this.setState({editing: false})
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li
        className={todoDetails.completed ? 'todo-item completed' : 'todo-item'}
      >
        {editing ? (
          <>
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
              className="input-field-saveText"
            />
            <button
              onClick={this.handleSave}
              className="saveButton"
              type="button"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <div className="checkBox-Title-Cont">
              <input
                type="checkbox"
                className="checkBox-Stl"
                checked={todoDetails.completed}
                onChange={() => toggleComplete(todoDetails.id)}
              />
              <p className="title">{todoDetails.title}</p>
            </div>
            <div className="button-container">
              <button
                className="editButton"
                onClick={this.handleEdit}
                type="button"
              >
                Edit
              </button>
              <button
                className="deleteButton"
                onClick={() => deleteTodo(todoDetails.id)}
                type="button"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
