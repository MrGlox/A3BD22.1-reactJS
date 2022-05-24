import { Item } from "components/atoms";
import data from "data.json";

const List = ({ name }) => {
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
