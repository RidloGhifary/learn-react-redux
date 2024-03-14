import { useDispatch } from "react-redux";
import {
  // eslint-disable-next-line no-unused-vars
  deleteTodo,
  deleteTodoAsync,
  editCompleteTodoAsync,
  // eslint-disable-next-line no-unused-vars
  todoComplete,
} from "../redux/todoSlice";

/* eslint-disable react/prop-types */
const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleTodoComplete = () => {
    // TODO - editWithRedux
    // dispatch(todoComplete({ id: id, completed: !completed }));

    // TODO - editWithAsyncThunk
    dispatch(editCompleteTodoAsync({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    // TODO - deleteWithRedux
    // dispatch(deleteTodo({ id: id }));

    // TODO - deleteWithAsyncThunk
    dispatch(deleteTodoAsync({ id }));
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
