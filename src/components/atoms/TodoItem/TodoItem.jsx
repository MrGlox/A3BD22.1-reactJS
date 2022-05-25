import "./TodoItem.scss";

const TodoItem = ({ children, isFinished, handleScribble }) => {
  return (
    <li onClick={handleScribble} className={isFinished ? "todo-finished" : ""}>
      {children}
    </li>
  );
};

export default TodoItem;
