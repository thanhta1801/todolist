import React from 'react';
import './css/Todo.css'

/// import components
import Header from './components/Header';
import TodoLists from './components/TodoLists';
import Footer from './components/Footer';



const filterByStatus = (todos = [], status = "", id) => {
  switch (status) {
    case "ACTIVE":
      return todos.filter(todo => !todo.status)
    case "COMPLETED":
      return todos.filter(todo => todo.status)
    case "REMOVE":
      return todos.filter(todo => todo.id !== id)
    default:
      return todos
  }
}



export const filterStatus = {
  ALL: "ALL",
  ACTION: "ACTION",
  COMPLETED: "COMPLETED"
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [
        { id: 1, name: "Thức Dậy", status: true },
        { id: 2, name: "Ăn Sáng", status: false },
        { id: 3, name: "Chơi Game", status: false },
      ],
      todoEditingId: "",
      status: filterStatus.ALL
    }
  }


  ///// Thêm công việc mới
  addItem = (itemNew) => {
    const todoList = this.state.todoList
    const newTodoList = [itemNew, ...todoList]
    this.setState(
      {
        todoList: newTodoList
      }
    );
  }

  //// Sửa công việc
  getTodoEditingId = (id) => {
    this.setState({ todoEditingId: id })
  }

  /// Lỗi iuput ko nhập đc dữ diệu khi doulcick
  editTodoItem = (id, name) => {
    const todoList = this.state.todoList;
    const data = todoList.find(data => data.id === id)
    data.name = name;
    this.setState({
      todoList: data,
    });
  };


  //// check công việc đã hoàn thành
  markCompleted = (id) => {
    const todoList = this.state.todoList;
    todoList.map((data) => {
      if (data.id === id) {
        data.status = !data.status
      }
      this.setState({
        data
      })
    })
  }

  /// xóa
  deleteTodoItem = (id) => {
    const { todoList } = this.state;
    const newList = todoList.filter((todo) => todo.id !== id);
    this.setState({
      todoList: newList,
    });
  };

  setStatusFilter = (status = '') => {
    this.setState({
      status
    })
  }

  render() {
    const { todoList, todoEditingId, status } = this.state
    return (
      <div className='todoapp'>
        <Header addItem={this.addItem} />
        <TodoLists
          todoList={filterByStatus(todoList,status)}
          getTodoEditingId={this.getTodoEditingId}
          todoEditingId={todoEditingId}
          editTodoItem={this.editTodoItem}
          markCompleted={this.markCompleted}
          deleteTodoItem={this.deleteTodoItem}
        />
        <Footer
          setStatusFilter={this.setStatusFilter}
          status={status}
          numOfTodosLeft={filterByStatus(todoList,'ACTION').length}
        />
      </div>
    )
  }
}

export default App;
