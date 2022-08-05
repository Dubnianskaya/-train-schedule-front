import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AddTrainForm } from "../AddTrainForm";
import { updateTrains } from "../../services/trainsApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function RedactModal({ open, handleClose, trainData, setListItem }) {
  const fetchTrainUpdates = async (data) => {
    await updateTrains(trainData._id, data);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <AddTrainForm
          updateTrains={fetchTrainUpdates}
          initialData={trainData}
          handleClose={handleClose}
          setListItem={setListItem}
          btnTxt="Зберігти зміни"
          btnLoadingTxt="Зберігаємо зміни..."
        />
      </Box>
    </Modal>
  );
}
