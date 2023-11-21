import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            valueInput: '',
        }
    }

    /// lấy giá trị người dùng nhập
    onChangeInput = (e) => {
        const value = e.target.value
        // console.log(value)
        this.setState({
            valueInput: value,
        })
    }

    /// ấn enter thêm item 
    handlKeyDown = (e) => {
        if (e.key === 'Enter') {
            const valueInput = this.state.valueInput
            const addItem = this.props.addItem
            const newItem = {
                id: new Date().valueOf(),
                name: valueInput,
                status: false,
            };
            addItem(newItem);
            this.setState({
                valueInput: " ",
            })
        }
    }


    render() {

        return (
            <div className="header">
                <h1>Todos</h1>
                <input
                    placeholder="What needs to be done?"
                    onKeyDown={this.handlKeyDown}
                    onChange={this.onChangeInput}
                    className="new-todo"
                    // Nhớ
                    value={this.state.valueInput}
                />
            </div>
        )
    }
}

export default Header