import format from "date-fns/format";

export const setInputMinDate = (date) => {
  return date.setHours(date.getHours() + 1, 0, 0);
};

export const setMinDate = (date) => {
  return date.setHours(date.getHours() + 1, -1, 0);
};

export const formatDate = (pickedDate) => {
  const formattedPickedDate = format(pickedDate, "dd.MM.yyyy HH:mm");
  return formattedPickedDate;
};
