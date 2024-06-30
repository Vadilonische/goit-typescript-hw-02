import React from "react";
import css from "./ImageModal.module.css";
import Modal from "react-modal";

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

Modal.setAppElement("#root");

interface IImageModal {
  isOpen: boolean;
  onCloseModal: () => void;
  imgUrl: string | null;
}

const ImageModal: React.FC<IImageModal> = ({
  isOpen,
  onCloseModal,
  imgUrl,
}) => {
  if (!imgUrl) return null;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={imgUrl} alt="Large view" />
      <button onClick={onCloseModal} className={css.btnClose}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
