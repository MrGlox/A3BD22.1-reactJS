import { Item } from "components/atoms";

const List = ({ name, data = [] }) => {
  if (data.length < 1) {
    return <p>Appart not found</p>;
  }

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
