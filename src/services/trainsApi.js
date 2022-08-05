import axios from "axios";

import { baseURL } from "../constants";

axios.defaults.baseURL = baseURL;

export async function getTrains(sort) {
  let url = `/trains`;
  if (sort) {
    url = `/trains?sort=${sort}`;
  }
  const data = await axios.get(url).then((res) => res.data);
  return data;
}

export async function addTrains(train) {
  const data = await axios.post(`/trains/add`, train).then((res) => res.data);
  return data;
}

export async function deleteTrains(id) {
  const data = await axios.delete(`/trains/${id}`).then((res) => res.data);
  return data;
}

export async function updateTrains(id, train) {
  const data = await axios.put(`trains/${id}`, train).then((res) => res.data);
  return data;
}

export async function searchTrains(departure, arrival) {
  let url = `/trains/search`;
  if (departure && arrival) {
    url = `/trains/search?departure=${departure}&arrival=${arrival}`;
  }
  const data = await axios.get(url).then((res) => res.data);
  return data;
}
