import TodoForm from "containers/TodoForm";
import { TodoList } from "components/molecules";

const ToDo = () => {
  return (
    <div>
      <h1>To do Page</h1>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
  );
};

export default ToDo;
