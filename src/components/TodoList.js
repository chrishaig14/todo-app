import TodoItem from "./TodoItem";
import React from "react";
import {connect} from "react-redux";
import "../styles/TodoList.css";

class TodoList extends React.Component {
    render() {
        return (<div className={"todo-list"}>
            {this.props.todos.map((todo, i) => <TodoItem todo={todo} key={i}/>)}
        </div>);
    }
}

const mapStateToProps = state => ({
    todos: state.main.todos
});

const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
