import { TodoItem } from "components/atoms";

const TodoList = () => {
  return (
    <ul>
      <TodoItem isFinished={true}>Tache 1</TodoItem>
      <TodoItem isFinished={false}>Tache 2</TodoItem>
    </ul>
  );
};

export default TodoList;
