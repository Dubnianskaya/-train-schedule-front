import axios from "axios";

import { baseURL } from "../constants";

axios.defaults.baseURL = baseURL;

export async function getTrains() {
  const data = await axios.get(`/trains`).then((res) => res.data);
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
