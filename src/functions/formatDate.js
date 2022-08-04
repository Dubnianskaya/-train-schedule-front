import format from "date-fns/format";

export const formatDate = (pickedDate) => {
  const formattedPickedDate = format(pickedDate, "dd.MM.yyyy HH:mm");
  return formattedPickedDate;
};
