import {combineReducers} from "redux";

function addTodo(state, action) {
    let new_state = JSON.parse(JSON.stringify(state));
    new_state.todos.push(action.todo);
    return new_state;
}

function reduce(state = {}, action) {
    let map = {};
    map["ADD_TODO"] = addTodo;
    if (map.hasOwnProperty(action.type)) {
        return (map[action.type])(state, action);
    }
    return state;
}

export default combineReducers({main: reduce});
