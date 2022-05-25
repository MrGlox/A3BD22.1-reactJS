import "./TodoItem.scss";

const TodoItem = ({ children, isFinished }) => {
  return <li className={isFinished && "todo-finished"}>{children}</li>;
};

export default TodoItem;
