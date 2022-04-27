import React, { Component } from "react";
// const React = require("react");

class TodoItem extends Component{
    render() {
        const { item } = this.props;
        let className = "todo-item";
        className = item.isComplete ? (className += " active") : className;
        return (
            <div className={className}>
                <p>{item.title}</p>
            </div>
        );
    }
}
export default TodoItem;