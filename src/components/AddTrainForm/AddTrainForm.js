import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import TextField from "@mui/material/TextField";
import ukLocale from "date-fns/locale/uk";
import { fetchStations } from "../../services/stationsAPI";
import { StantionsList } from "./StantionsList";
import {
  CalculatorForm,
  FormFlexContainer,
  TextFieldStyled,
  AutocompleteBox,
  Button,
} from "./AddTrainForm.styled";

export const AddTrainForm = ({
  initialData,
  updateTrains,
  handleClose,
  setListItem,
}) => {
  const { departure, arrival, departureDate, arrivalDate } = initialData;
  const [departureStations, setDepartureStations] = useState([]);
  const [arrivalStations, setArrivalStations] = useState([]);
  const [searchStringDeparture, setSearchStringDeparture] = useState(
    departure?.station || ""
  );
  const [searchStringArrival, setSearchStringArrival] = useState(
    arrival?.station || ""
  );
  const [departureObj, setDepartureObj] = useState(departure || {});
  const [arrivalObj, setArrivalObj] = useState(arrival || {});
  const [isDepartureFocus, setIsDepartureFocus] = useState(false);
  const [isArrivalFocus, setIsArrivalFocus] = useState(false);
  const [departureDateValue, setDepartureDateValue] = useState(
    departureDate || new Date()
  );
  const [arrivalDateValue, setArrivalDateValue] = useState(
    arrivalDate || new Date()
  );
  const [loading, setLoading] = useState(false);

  const submitData = {
    departure: departureObj._id,
    arrival: arrivalObj._id,
    departureDate: departureDateValue,
    arrivalDate: arrivalDateValue,
  };

  const isModalForm = Object.keys(initialData).length !== 0;
  const modalSubmit = (modalData) => {
    setListItem(modalData);
    handleClose();
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    if (
      searchStringDeparture.length === 0 ||
      searchStringArrival.length === 0
    ) {
      return toast.error("Усі поля повинні бути заповнені!");
    } else {
      try {
        setLoading(true);
        await updateTrains(submitData);
        isModalForm &&
          modalSubmit({
            departure: departureObj,
            arrival: arrivalObj,
            departureDate: departureDateValue,
            arrivalDate: arrivalDateValue,
          });
        setLoading(false);
        setSearchStringDeparture("");
        setSearchStringArrival("");
        setDepartureDateValue(new Date());
        setArrivalDateValue(new Date());
        return toast.success(`Операція успішна!`);
      } catch (error) {
        console.log(error);
        setLoading(false);
        return toast.error("Сталася помилка. Перевірте правильність данних");
      }
    }
  };

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
    fetchStationsByQuery(searchStringDeparture, setDepartureStations);
  }, [searchStringDeparture]);
  useEffect(() => {
    fetchStationsByQuery(searchStringArrival, setArrivalStations);
  }, [searchStringArrival]);

  return (
    <form onSubmit={formSubmitHandler}>
      <CalculatorForm>
        <FormFlexContainer>
          <div>
            <AutocompleteBox>
              <TextFieldStyled
                value={searchStringDeparture}
                onChange={(event) => {
                  setSearchStringDeparture(event.target.value);
                }}
                onFocus={() => setIsDepartureFocus(true)}
                label="Місце відправлення"
                name="departure"
                autoComplete="off"
              />
              {isDepartureFocus && (
                <StantionsList
                  query={searchStringDeparture}
                  array={departureStations}
                  setQuery={setSearchStringDeparture}
                  setObj={setDepartureObj}
                  setIsFocus={setIsDepartureFocus}
                />
              )}
            </AutocompleteBox>
            <AutocompleteBox>
              <TextFieldStyled
                value={searchStringArrival}
                onChange={(event) => {
                  setSearchStringArrival(event.target.value);
                }}
                onFocus={() => setIsArrivalFocus(true)}
                label="Місце прибуття"
                name="arrival"
                autoComplete="off"
              />
              {isArrivalFocus && (
                <StantionsList
                  query={searchStringArrival}
                  array={arrivalStations}
                  setQuery={setSearchStringArrival}
                  setObj={setArrivalObj}
                  setIsFocus={setIsArrivalFocus}
                />
              )}
            </AutocompleteBox>
          </div>
          <div>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={ukLocale}
            >
              <DateTimePicker
                renderInput={(params) => (
                  <TextFieldStyled name="departureDate" {...params} />
                )}
                label="Оберіть час відправлення"
                value={departureDateValue}
                onChange={(newValue) => {
                  setDepartureDateValue(newValue);
                }}
                disablePast
                // minDateTime={new Date()}
              />
              <DateTimePicker
                renderInput={(params) => (
                  <TextFieldStyled name="arrivalDate" {...params} />
                )}
                label="Оберіть час прибуття"
                value={arrivalDateValue}
                onChange={(newValue) => {
                  setArrivalDateValue(newValue);
                }}
                disablePast
                // minDateTime={new Date()}
              />
            </LocalizationProvider>
          </div>
        </FormFlexContainer>
        {isModalForm ? (
          <Button type="submit">
            {loading ? "Зберігаємо зміни..." : "Зберігти зміни"}
          </Button>
        ) : (
          <Button type="submit">
            {loading ? "Додаємо потяг..." : "Додати потяг"}
          </Button>
        )}
      </CalculatorForm>
    </form>
  );
};
