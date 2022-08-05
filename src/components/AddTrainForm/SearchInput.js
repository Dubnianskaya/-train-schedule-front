import { useEffect } from "react";
import { fetchStations } from "../../services/stationsAPI";
import Backdrop from "@mui/material/Backdrop";
import { TextFieldStyled, AutocompleteBox } from "./AddTrainForm.styled";
import { StantionsList } from "./StantionsList";

export const SeachInput = ({
  searchString,
  setSearchString,
  isFocus,
  setIsFocus,
  stationsArray,
  setStationsArray,
  setObj,
  label,
  name,
  styles,
}) => {
  const fetchStationsByQuery = async (query, setArray) => {
    if (query.length === 0) {
      setArray([]);
      return;
    } else {
      try {
        const { data } = await fetchStations(query);
        const array = data.result.map((obj) => obj);
        await setArray(array);
        return array;
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchStationsByQuery(searchString, setStationsArray);
  }, [searchString, setStationsArray]);

  return (
    <>
      <AutocompleteBox>
        <TextFieldStyled
          value={searchString}
          onChange={(event) => {
            setSearchString(event.target.value);
          }}
          onFocus={() => setIsFocus(true)}
          label={label}
          name={name}
          autoComplete="off"
          style={styles}
        />
        {isFocus && (
          <StantionsList
            query={searchString}
            array={stationsArray}
            setQuery={setSearchString}
            setObj={setObj}
            setIsFocus={setIsFocus}
          />
        )}
      </AutocompleteBox>
      <Backdrop
        sx={{ backgroundColor: "transparent", zIndex: 2 }}
        open={isFocus}
        onClick={() => setIsFocus(false)}
      />
    </>
  );
};
