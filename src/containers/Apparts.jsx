import { useState } from "react";

import { Form } from "components/atoms";
import { List } from "components/molecules";

import data from "data.json";

const Apparts = () => {
  const [value, setValue] = useState("");

  const handleChange = ({ target: { value } }) => setValue(value);

  const filteredData = data.filter((element) =>
    element.title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <Form handleChange={handleChange} value={value} />
      <List name="firstList" data={filteredData} />
    </>
  );
};

export default Apparts;
