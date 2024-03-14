/* eslint-disable react/prop-types */
const TodoItem = ({ title, completed }) => {
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <label htmlFor="todo" className="d-flex align-items-center">
          <input
            id="todo"
            type="checkbox"
            className="mr-3"
            checked={completed}></input>
          {title}
        </label>
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
