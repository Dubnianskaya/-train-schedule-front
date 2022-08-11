import { useCallback, useEffect } from "react";
import { fetchStations } from "../../services/stationsAPI";
import Backdrop from "@mui/material/Backdrop";
import {
  TextFieldStyled,
  AutocompleteBox,
  InputContainer,
} from "./AddTrainForm.styled";
import { StantionsList } from "./StantionsList";
import debounce from "lodash.debounce";

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

  const debouncedFunc = useCallback(debounce(fetchStationsByQuery, 300), []);

  useEffect(() => {
    debouncedFunc(searchString, setStationsArray);
  }, [debouncedFunc, searchString, setStationsArray]);

  return (
    <InputContainer style={styles}>
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
    </InputContainer>
  );
};
