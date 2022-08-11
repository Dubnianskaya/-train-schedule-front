import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import ukLocale from "date-fns/locale/uk";
import { TextFieldStyled, InputContainer } from "./AddTrainForm.styled";

export const DateInput = ({
  value,
  setValue,
  minTime,
  maxTime,
  name,
  label,
}) => {
  return (
    <InputContainer>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={ukLocale}
      >
        <DateTimePicker
          renderInput={(params) => <TextFieldStyled name={name} {...params} />}
          label={label}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          disablePast
          minDateTime={minTime}
          maxDateTime={maxTime}
        />
      </LocalizationProvider>
    </InputContainer>
  );
};
