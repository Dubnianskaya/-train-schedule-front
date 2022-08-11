import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { searchTrains } from "../services/trainsApi";
import {
  StyledContainer,
  TrainPageWrapper,
  TrainsFilterContainer,
  TrainsPlugContainer,
} from "../components/Container/Container.styled";
import {
  TrainsPlugTitle,
  TrainListSeachForm,
} from "../components/TrainsList/TrainsList.styled";
import { Container } from "../components/Container";
import { TrainsList } from "../components/TrainsList";
import { SeachInput } from "../components/AddTrainForm/SearchInput";
import { Loader } from "../components/Loader";

export const SearchPage = () => {
  const [trainsArray, setTrainsArray] = useState([]);
  const [searchDataArray, setSearchDataArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [departureStations, setDepartureStations] = useState([]);
  const [arrivalStations, setArrivalStations] = useState([]);
  const [searchStringDeparture, setSearchStringDeparture] = useState("");
  const [searchStringArrival, setSearchStringArrival] = useState("");
  const [departureObj, setDepartureObj] = useState({});
  const [arrivalObj, setArrivalObj] = useState({});
  const [isDepartureFocus, setIsDepartureFocus] = useState(false);
  const [isArrivalFocus, setIsArrivalFocus] = useState(false);
  const [reverseData, setReverseData] = useState(false);

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (
      searchStringDeparture.length === 0 ||
      searchStringArrival.length === 0
    ) {
      return toast.error("Усі поля повинні бути заповнені!");
    }
    return setSearchDataArray([searchStringDeparture, searchStringArrival]);
  };

  useEffect(() => {
    const searchTrainsByQuery = async () => {
      if (searchDataArray.length === 0) {
        return;
      } else {
        try {
          setLoading(true);
          const { data } = await searchTrains(...searchDataArray);
          await setTrainsArray(data.trains);
          setLoading(false);
          return toast.success(
            `Знайдено ${data.trains.length} потяг(и) за вашим напрямком!`
          );
        } catch (error) {
          console.log(error);
          setLoading(false);
          return toast.error("Нічого не знайдено");
        }
      }
    };
    searchTrainsByQuery();
  }, [searchDataArray]);

  useEffect(() => {
    const reverseSearchData = () => {
      if (reverseData) {
        searchDataArray.reverse();
        setSearchStringDeparture(searchDataArray[0]);
        setSearchStringArrival(searchDataArray[1]);
        setReverseData(false);
      }
    };
    reverseSearchData();
  }, [reverseData, searchDataArray]);

  return (
    <StyledContainer>
      <Container>
        <TrainPageWrapper>
          <TrainsFilterContainer>
            <TrainListSeachForm onSubmit={formSubmitHandler}>
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
                styles={{ margin: 0 }}
              />
              <IconButton
                type="button"
                size="large"
                onClick={() => setReverseData(true)}
              >
                <SyncAltIcon color="primary" fontSize="large" />
              </IconButton>
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
                styles={{ margin: 0 }}
              />
              <IconButton type="submit" size="large">
                <Search color="primary" fontSize="large" />
              </IconButton>
            </TrainListSeachForm>
          </TrainsFilterContainer>
          {loading && <Loader />}
          {!loading && trainsArray.length === 0 ? (
            <TrainsPlugContainer>
              <TrainsPlugTitle>Нічого не знайдено</TrainsPlugTitle>
            </TrainsPlugContainer>
          ) : (
            <TrainsList trains={trainsArray} setTrainsList={setTrainsArray} />
          )}
        </TrainPageWrapper>
      </Container>
    </StyledContainer>
  );
};
