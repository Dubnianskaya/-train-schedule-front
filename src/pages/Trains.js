import { useState, useEffect } from "react";
import { getTrains } from "../services/trainsApi";
import { TrainsList } from "../components/TrainsList";
import {
  StyledContainer,
  TrainPageWrapper,
  TrainsFilterContainer,
  TrainsPlugContainer,
} from "../components/Container/Container.styled";
import {
  TrainsPlugTitle,
  Link,
} from "../components/TrainsList/TrainsList.styled";
import { Container } from "../components/Container";
import { Filter } from "../components/Filter";

export const Trains = () => {
  const [trainsArray, setTrainsArray] = useState([]);
  const [sort, setSort] = useState("createdAtDec");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        setLoading(true);
        const { data } = await getTrains(sort);
        await setTrainsArray(data.trains);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrains();
  }, [sort]);

  return (
    <StyledContainer>
      <Container>
        {!loading && trainsArray.length === 0 ? (
          <TrainsPlugContainer>
            <TrainsPlugTitle>
              Відсутні потяги у списку.
              <Link to="/">Почніть додавати потяги</Link>
            </TrainsPlugTitle>
          </TrainsPlugContainer>
        ) : (
          <TrainPageWrapper>
            <TrainsFilterContainer>
              <Filter sort={sort} setSort={setSort} />
            </TrainsFilterContainer>
            <TrainsList trains={trainsArray} setTrainsList={setTrainsArray} />
          </TrainPageWrapper>
        )}
      </Container>
    </StyledContainer>
  );
};
