import React from "react";

import {connect} from "react-redux";
import {addTodo} from "../actions";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.todoRef = React.createRef();
        this.state = {todo: ""};
    }

    render() {
        return (
            <form className={"todo-form"} onSubmit={(e) => {
                e.preventDefault();
                this.props.submit(this.todoRef.current.value);
                this.setState({todo: ""});
            }}>
                <input type={"text"} ref={this.todoRef} value={this.state.todo}
                       onChange={() => this.setState({todo: this.todoRef.current.value})}/>
                <button type={"submit"}>+</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {
    submit: addTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

