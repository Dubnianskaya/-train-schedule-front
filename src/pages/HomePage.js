import { AddTrainForm } from "../components/AddTrainForm";
import { addTrains } from "../services/trainsApi";
import { FormTitle } from "../components/AddTrainForm/AddTrainForm.styled";
import {
  StyledContainer,
  MainPageWrapper,
} from "../components/Container/Container.styled";
import { Container } from "../components/Container";

export const HomePage = () => {
  const addTrain = async (trainData) => {
    await addTrains(trainData);
  };

  return (
    <StyledContainer>
      <Container>
        <MainPageWrapper>
          <FormTitle>Додайте потяг до розкладу</FormTitle>
          <AddTrainForm
            updateTrains={addTrain}
            initialData={{}}
            btnTxt="Додати потяг"
            btnLoadingTxt="Додаємо потяг..."
          />
        </MainPageWrapper>
      </Container>
    </StyledContainer>
  );
};
