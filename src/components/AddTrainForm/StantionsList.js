import { nanoid } from "nanoid";
import { StationsList, StationsItem } from "./AddTrainForm.styled";

export const StantionsList = ({
  query,
  array,
  setQuery,
  setObj,
  setIsFocus,
}) => {
  const checkIfInputFilled = query.length !== 0;
  const onNotFoundStantion = array.length === 0 && query.length !== 0;

  function handleStationName(event) {
    const currentStation = event.target.outerText;

    if (currentStation === "Станцію не знайдено") {
      return setQuery("");
    }

    const pickedStation = array.find((obj) => {
      return obj.station === currentStation;
    });

    setQuery(currentStation);
    setObj(pickedStation);
    setIsFocus(false);
  }

  return (
    <>
      {checkIfInputFilled && (
        <StationsList>
          {onNotFoundStantion && (
            <StationsItem key={nanoid()} onClick={(e) => handleStationName(e)}>
              Станцію не знайдено
            </StationsItem>
          )}

          {array.map((obj) => {
            return (
              <StationsItem key={obj._id} onClick={(e) => handleStationName(e)}>
                {obj.station}
              </StationsItem>
            );
          })}
        </StationsList>
      )}
    </>
  );
};
