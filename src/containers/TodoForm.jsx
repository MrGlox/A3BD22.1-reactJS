const TodoForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <input type="submit" value="Ajouter" />
    </form>
  );
};

export default TodoForm;
