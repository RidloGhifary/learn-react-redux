import { useDispatch } from "react-redux";
import { deleteTodo, todoComplete } from "../redux/todoSlice";

/* eslint-disable react/prop-types */
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleTodoComplete = () => {
    dispatch(todoComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-3 align-items-center">
          <input
            id="todo"
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleTodoComplete}
          />
          {title}
        </div>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
