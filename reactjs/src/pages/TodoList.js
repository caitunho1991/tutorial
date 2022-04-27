import React, { Component } from "react";
import { Container } from "react-bootstrap";

import TodoItem from "../components/TodoItem";

class TodoList extends Component{
    constructor() {
        super();
        this.todoItems = [
            { 
                title: "Mua bim bim",
                isComplete: true
            },
            {
                title: "Đi đá bóng",
                isComplete: false
            },
            {
                title: "Đi đổ xăng",
                isComplete: false
            }
        ];
    }
    render() {
        return (
            <div className="todo-list">
                <Container>
                    {
                        this.todoItems.length > 0 && this.todoItems.map((item, index) => 
                            <TodoItem key={index} item={item}/> )
                    }
                    {
                        this.todoItems.length === 0 && "Nothing Here."
                    }
                </Container>
            </div>
        );
    }
}
export default TodoList;