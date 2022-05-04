import addClassNames from 'classnames'; 
export default function Item(props) {
    const { selected, remove, data } = props;
    return (
        <div className="todo-item">
            <div onClick={ () => selected(data.id) } className={ addClassNames("todo-info", { "selected" : data.selected }) }>
                <p className="todo-icon checkbox"></p>
                <p className="todo-name">{ data.name }</p>
            </div>
            <div className="todo-actions">
                <p onClick={ () => remove(data.id) } className="icon-remove"></p>
            </div>
        </div>
    );
}