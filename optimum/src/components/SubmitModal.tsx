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
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Message Modal"
    >
      <div className="text-center">
        <DoneIcon fontSize="large" />
        <h2 className="text-xl font-semibold mt-4">Submission Successful!</h2>
        <p>Your message has been sent successfully.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default SubmitModal;
