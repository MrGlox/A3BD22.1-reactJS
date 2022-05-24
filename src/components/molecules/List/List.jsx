import { Item } from "components/atoms";

const List = ({ name, data = [] }) => {
  return (
    <ul>
      {data.map((element, index) => (
        <Item key={name + index} {...element}>
          {element.description}
        </Item>
      ))}
    </ul>
  );
};

export default List;
