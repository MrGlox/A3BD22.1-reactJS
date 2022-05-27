import logo from "logo.svg";
import useModal from "contexts/Modal";

const Home = () => {
  const { setOpen } = useModal();

  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={() => setOpen(true)}>Open Modal</button>
    </>
  );
};

export default Home;
