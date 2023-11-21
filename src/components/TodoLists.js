import React from "react";
import Todo from "./Todo";


class TodoLists extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {


        const { todoList, getTodoEditingId, todoEditingId, editTodoItem, markCompleted, deleteTodoItem } = this.props

        return (
            <section className="main">
                <input className="toggle-all" />
                <label htmlFor="toggle"></label>
                <ul className="todo-list">
                    {todoList.map((item, index) => {
                        return <Todo key={index}
                            data={item}
                            getTodoEditingId={getTodoEditingId}
                            todoEditingId={todoEditingId}
                            editTodoItem={editTodoItem}
                            markCompleted={markCompleted}
                            deleteTodoItem={deleteTodoItem}
                        />
                    })}
                </ul>
            </section>
        )
    }
}

export default TodoLists