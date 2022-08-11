import { Grid } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

export function Loader() {
  return (
    <LoaderContainer>
      <Grid color="#1976d2" height={80} width={80} />
    </LoaderContainer>
  );
}
