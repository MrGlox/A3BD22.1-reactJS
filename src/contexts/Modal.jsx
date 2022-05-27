import { createContext, useContext, useState } from "react";
import ReactModal from "react-modal";

const ModalContext = createContext();

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

ReactModal.setAppElement("#root");

export const Provider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [contentLabel] = useState("contentLabel");

  return (
    <ModalContext.Provider value={{ isOpen, setOpen }}>
      {children}
      <ReactModal
        isOpen={isOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setOpen(false)}
        style={customStyles}
        contentLabel={contentLabel}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod accusamus
        maxime sed! Rerum autem deserunt quae obcaecati nemo, atque rem
        similique quas fugiat amet sed laboriosam expedita corporis, eius
        doloribus!
      </ReactModal>
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);
export default useModal;
