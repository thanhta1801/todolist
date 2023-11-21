import React from "react";


class Footer extends React.Component {

    constructor(props) {
        super(props);
        
    }


    render() {
        
        const { status, setStatusFilter, numOfTodosLeft } = this.props
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{numOfTodosLeft} </strong>
                    <span>{numOfTodosLeft <= 1 ? 'Item' : 'Items'} </span>
                    <span> Left</span>
                </span>
                <ul className="filters">
                    <li>
                        <a
                            href="#/"
                            className={`${status === 'ALL' ? "selected" : ''}`}
                            onClick={() => setStatusFilter('ALL')}
                        >
                            All
                        </a>
                    </li>
                    <span></span>
                    <li>
                        <a
                            href="#/active"
                            className={`${status === 'ACTIVE' ? "selected" : ''}`}
                            onClick={() => setStatusFilter('ACTIVE')}
                        >
                            Active
                        </a>
                    </li>
                    <span></span>
                    <li>
                        <a
                            href="#/completed"
                            className={`${status === 'COMPLETED' ? "selected" : ''}`}
                            onClick={() => setStatusFilter('COMPLETED')}
                        >
                            Completed
                        </a>
                    </li>
                </ul>
            </footer>
        )
    }
}



export default Footer