import { AddTrainForm } from "../components/AddTrainForm";
import { addTrains } from "../services/trainsApi";
import { FormTitle } from "../components/AddTrainForm/AddTrainForm.styled";

export const HomePage = () => {
  const addTrain = async (trainData) => {
    await addTrains(trainData);
  };

  return (
    <div>
      <FormTitle>Додайте потяг до розкладу</FormTitle>
      <AddTrainForm updateTrains={addTrain} initialData={{}} />
    </div>
  );
};
