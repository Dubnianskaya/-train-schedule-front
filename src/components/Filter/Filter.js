import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export const Filter = ({ sort, setSort }) => {
  return (
    <FormControl>
      <InputLabel variant="standard" htmlFor="filter">
        Сортувати
      </InputLabel>
      <NativeSelect
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        inputProps={{
          name: "filter",
          id: "filter",
        }}
      >
        <option value="departure">За назвою пункту відправлення</option>
        <option value="departureDate">За часом відправлення</option>
        <option value="updatedAt">За останніми оновленнями</option>
        <option value="createdAt">За датою створеня(старіші)</option>
        <option value="createdAtDec">За датою створення(новіші)</option>
      </NativeSelect>
    </FormControl>
  );
};
