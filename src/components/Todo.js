import React from "react";



class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.data.name,
        }
    }

    handleKeyDown = (e) => {
        const editTodoItem = this.props.editTodoItem
        if (e.code === "Enter") {
          const data = this.props.data;
          const newName = e.target.value;
          this.setState({
            isEditing: false,
            value: newName,
          });
          editTodoItem(data.id, newName);
        }
      };
      changeValue = (e) => {
        const { value } = e.target;
        this.setState({
          value,
        });
      };

      handleDelete = () => {
        const deleteTodoItem = this.props.deleteTodoItem
        const data = this.props.data
        deleteTodoItem(data.id);
      };

    render() {
       
        
        const {data, getTodoEditingId, todoEditingId, markCompleted} = this.props
        const isEditing = todoEditingId === data.id
        


        return (
            <li className={`${isEditing ? 'editing' : ' '}  ${data.status ? 'completed' : ''}`}>

                {!isEditing ?
                    <div className="view">
                        <input className="toggle" type="checkbox"
                            onClick={() => markCompleted(data.id)}// lỗi
                            checked={data.status} />
                        <label onDoubleClick={() => getTodoEditingId(data.id)}>{data.name}</label>
                        <button className="destroy" onClick={this.handleDelete}></button>
                    </div> :
                    <input onChange={this.changeValue}
                        onKeyDown={this.handleKeyDown}
                        className="edit" type="text" value={this.state.value} />


                }

            </li>
        )
    }
}


export default Todo