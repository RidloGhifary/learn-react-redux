import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const todo = useSelector(
    (state) => state.todos.filter((x) => x.completed).length
  );

  return <h4 className="mt-3">Total Complete Items: {todo}</h4>;
};

export default TotalCompleteItems;
