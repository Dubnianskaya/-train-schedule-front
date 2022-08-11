import { useState } from "react";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import {
  setInputMinDate,
  setMinDate,
  setDepMaxDate,
  setArrMaxDate,
} from "../../functions";
import { SeachInput } from "./SearchInput";
import { DateInput } from "./DateInput";
import { CalculatorForm, FormFlexContainer } from "./AddTrainForm.styled";

export const AddTrainForm = ({
  initialData,
  updateTrains,
  handleClose,
  setListItem,
  btnTxt,
  btnLoadingTxt,
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
    departureDate || setInputMinDate(new Date())
  );
  const [arrivalDateValue, setArrivalDateValue] = useState(
    arrivalDate || setInputMinDate(new Date())
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
    } else if (departureDateValue === arrivalDateValue) {
      toast.error("Дати відправлення та прибуття не можуть бути однакові");
    } else if (
      Object.keys(departureObj).length === 0 ||
      Object.keys(arrivalObj).length === 0
    ) {
      toast.error("Оберіть станцію зі списку");
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
        setDepartureDateValue(setInputMinDate(new Date()));
        setArrivalDateValue(setInputMinDate(new Date()));
        return toast.success(`Операція успішна!`);
      } catch (error) {
        console.log(error);
        setLoading(false);
        return toast.error("Сталася помилка. Перевірте правильність данних");
      }
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <CalculatorForm>
        <FormFlexContainer>
          <div>
            <SeachInput
              searchString={searchStringDeparture}
              setSearchString={setSearchStringDeparture}
              isFocus={isDepartureFocus}
              setIsFocus={setIsDepartureFocus}
              stationsArray={departureStations}
              setStationsArray={setDepartureStations}
              setObj={setDepartureObj}
              label="Місце відправлення"
              name="departure"
            />
            <SeachInput
              searchString={searchStringArrival}
              setSearchString={setSearchStringArrival}
              isFocus={isArrivalFocus}
              setIsFocus={setIsArrivalFocus}
              stationsArray={arrivalStations}
              setStationsArray={setArrivalStations}
              setObj={setArrivalObj}
              label="Місце прибуття"
              name="arrival"
            />
          </div>
          <div>
            <DateInput
              value={departureDateValue}
              setValue={setDepartureDateValue}
              minTime={setMinDate(new Date())}
              maxTime={setDepMaxDate(new Date())}
              name="departureDate"
              label="Оберіть час відправлення"
            />
            <DateInput
              value={arrivalDateValue}
              setValue={setArrivalDateValue}
              minTime={departureDateValue}
              maxTime={setArrMaxDate(new Date(departureDateValue))}
              name="arrivalDate"
              label="Оберіть час прибуття"
            />
          </div>
        </FormFlexContainer>
        <Button type="submit" variant="contained" size="large">
          {loading ? btnLoadingTxt : btnTxt}
        </Button>
      </CalculatorForm>
    </form>
  );
};
