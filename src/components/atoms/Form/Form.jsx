const Form = ({ value, handleChange }) => {
  return (
    <>
      <input type="text" onChange={handleChange} defaultValue={value} />
      <p>{value}</p>
    </>
  );
};

export default Form;
