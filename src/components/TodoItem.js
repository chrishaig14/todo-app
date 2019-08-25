import React from "react";
import "../styles/TodoItem.css";

class TodoItem extends React.Component {
    render() {
        return (<div className={"todo-item"}>{this.props.todo}</div>);
    }
}

export default TodoItem;
