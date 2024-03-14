import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalCompleteItems from "./components/TotalCompleteItems";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container bg-white rounded p-4 mt-5">
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
};

export default App;
