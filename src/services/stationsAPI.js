import axios from "axios";

import { baseURL } from "../constants";

axios.defaults.baseURL = baseURL;

export async function fetchStations(query) {
  const data = await axios
    .get(`/stations?station=${query}`)
    .then((res) => res.data);
  return data;
}
