import { useState } from "react";
import { GUID } from "../utils/utils";
import Item from "./Item";
export default function List(props) {
    const [todoData, updateTodoData] = useState([]);

    function addTodoItem(event) {
        const elem__TodoList = event.target.closest(".todo-list");
        const elm__InputTodoName = elem__TodoList && elem__TodoList.querySelector("input[name=todo-name]");
        const objTodoItem = {
            name: elm__InputTodoName.value,
            id: GUID(),
            selected: false
        }
        updateTodoData([...todoData, objTodoItem]);

        elm__InputTodoName.value = "";
    }

    function onPressAddTodoItem(event) {
        if (event.key === "Enter") {
            addTodoItem(event);
        }
    }

    function removeItem(guid) {
        let arrTodoItem = [];
        todoData.forEach((item)=>{
            if (item.id !== guid) {
                arrTodoItem = [...arrTodoItem,{...item}];
            }
        });
        updateTodoData(arrTodoItem);
    }

    function selectedTodoItem(guid) {
        const arrTodoData = [...todoData];
        arrTodoData.map((item) => {
            if (item.id === guid) {
                item.selected = item.selected === true ? false : true;
            }
            return item;
        });
        updateTodoData(arrTodoData);
    }

    return (
        <div className="todo-list">
            <div className="form-group">
                <input onKeyPress={onPressAddTodoItem} type="text" placeholder="" name="todo-name" className="form-text" />
                <span onClick={addTodoItem} className="todo-add icon-plus"></span>
            </div>
            {
                todoData.length === 0 && <p>no data</p>
            }
            {
                todoData.map(function (item) {
                    return <Item selected={selectedTodoItem} remove={removeItem} key={item.id} data={item}/>
                })
            }
            {
                todoData.length > 0 && 
                <div className="result">
                    {todoData.filter(item => item.selected === true).length} of {todoData.length} task dones
                </div>
            }
        </div>
    );
}