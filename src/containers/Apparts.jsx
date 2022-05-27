import useMain from "contexts/Main";

import { Form } from "components/atoms";
import { List } from "components/molecules";

const Apparts = () => {
  const { handleChange, value, filteredData } = useMain();

  return (
    <>
      <Form handleChange={handleChange} value={value} />
      <List name="firstList" data={filteredData} />
    </>
  );
};

export default Apparts;
