import { useState } from "react";

import TodoForm from "containers/TodoForm";
import { TodoList } from "components/molecules";

const ToDo = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) ?? []
  );

  localStorage.setItem("list", JSON.stringify(list));

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setList([...list, { isFinished: false, content: ev.target[0].value }]);
  };

  const handleScribble = (index) => {
    setList((prev) => {
      prev[index].isFinished = !prev[index].isFinished;
      return [...prev];
    });
  };

  return (
    <div>
      <h1>To do Page</h1>
      <TodoForm handleSubmit={handleSubmit} />
      <TodoList handleScribble={handleScribble} list={list}></TodoList>
    </div>
  );
};

export default ToDo;
