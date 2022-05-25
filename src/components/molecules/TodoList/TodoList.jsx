import { TodoItem } from "components/atoms";

const TodoList = ({ list = [], handleScribble }) => {
  return (
    <ul>
      {list.map(({ content, ...rest }, index) => (
        <TodoItem
          key={index}
          {...rest}
          handleScribble={() => handleScribble(index)}
        >
          {content}
        </TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
