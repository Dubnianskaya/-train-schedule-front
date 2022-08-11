import { useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";
import {
  DataContainer,
  DataTitle,
  TrainData,
  CardContainer,
  DisabledTitle,
} from "./TrainsListItem.styled";
import { deleteTrains } from "../../services/trainsApi";
import { RedactModal } from "../RedactModal";
import { formatDate } from "../../functions";

export const TrainsListItem = ({ train, setTrainsList }) => {
  const [listItemData, setListItemData] = useState(train);
  const { departure, arrival, departureDate, arrivalDate } = listItemData;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isTrainDisabled = new Date() > departureDate;

  const onTrainDelete = async (id) => {
    try {
      const { data } = await deleteTrains(id);
      setTrainsList((prevState) =>
        prevState.filter((train) => train._id !== id)
      );
      toast.success(`Потяг успішно видалено`);
      return data.result;
    } catch (error) {
      console.log(error);
      toast.error(`Сталася помилка видалення`);
    }
  };

  return (
    <Card>
      <CardContainer isDisabled={isTrainDisabled}>
        {isTrainDisabled && <DisabledTitle>Рейс завершено</DisabledTitle>}
        <DataContainer>
          <DataTitle>Місце відправлення:</DataTitle>
          <TrainData>{departure.station}</TrainData>
        </DataContainer>
        <DataContainer>
          <DataTitle>Місце прибуття:</DataTitle>
          <TrainData>{arrival.station}</TrainData>
        </DataContainer>
        <DataContainer>
          <DataTitle>Час відправлення:</DataTitle>
          <TrainData>{formatDate(departureDate)}</TrainData>
        </DataContainer>
        <DataContainer>
          <DataTitle>Час прибуття:</DataTitle>
          <TrainData>{formatDate(arrivalDate)}</TrainData>
        </DataContainer>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button
            variant="outlined"
            type="button"
            onClick={handleOpen}
            disabled={isTrainDisabled}
          >
            Редагувати
          </Button>
          <Button
            variant="contained"
            type="button"
            onClick={() => onTrainDelete(train._id)}
          >
            Видалити
          </Button>
        </Stack>
      </CardContainer>
      <RedactModal
        open={open}
        handleClose={handleClose}
        trainData={train}
        setListItem={setListItemData}
      />
    </Card>
  );
};
