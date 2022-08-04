import { useState, useEffect } from "react";
import { getTrains } from "../services/trainsApi";
import { TrainsList } from "../components/TrainsList";

export const Trains = () => {
  const [trainsArray, setTrainsArray] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const { data } = await getTrains();
        await setTrainsArray(data.trains);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrains();
  }, []);

  return (
    <>
      <TrainsList trains={trainsArray} setTrainsList={setTrainsArray} />
    </>
  );
};
