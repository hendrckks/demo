import Modal from "react-modal";
import DoneIcon from "@mui/icons-material/Done";

interface SubmitModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const SubmitModal: React.FC<SubmitModalProps> = ({
  isModalOpen,
  closeModal,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "600px",
      height: "300px",
    },
  };
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Message Modal"
      style={customStyles}
    >
      <div className="text-center flex-col items-center justify-center">
        <DoneIcon fontSize="large" className="mt-[20px]" />
        <h2 className="text-xl font-semibold mt-4">Submission Successful!</h2>
        <p>Your message has been sent successfully.</p>
        <button
          className="mt-4 px-6 py-3 bg-black text-white text-[12px] rounded-full hover:scale-105 transition-transform duration-200"
          onClick={closeModal}
        >
          <h1 className="flex items-center font-semibold">Close</h1>
        </button>
      </div>
    </Modal>
  );
};

export default SubmitModal;
