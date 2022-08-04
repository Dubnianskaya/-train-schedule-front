import { TrainsListItem } from "../TrainsListItem";
import Grid from "@mui/material/Grid";
import { parseISO } from "date-fns";
import { TrainsListContainer } from "./TrainsList.styled";

export const TrainsList = ({ trains, setTrainsList }) => {
  return (
    <TrainsListContainer>
      <Grid container spacing={3} justifyContent="center">
        {trains.map((train) => (
          <Grid item key={train._id}>
            <TrainsListItem
              train={{
                ...train,
                departureDate: parseISO(train.departureDate),
                arrivalDate: parseISO(train.arrivalDate),
              }}
              setTrainsList={setTrainsList}
            />
          </Grid>
        ))}
      </Grid>
    </TrainsListContainer>
  );
};
