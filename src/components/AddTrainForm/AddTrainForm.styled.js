import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import { mediaTablet } from "../../functions/media";

export const FormTitle = styled.h1`
  font-size: 28px;
  text-align: center;
  color: #000;
  ${mediaTablet(`
  font-size: 36px;
  line-height: 26px;
  margin-bottom: 32px;
    `)}
`;

export const CalculatorForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextFieldStyled = styled(TextField)`
  display: block;
  margin: 40px 20px 0 20px;
  background-color: #cfefff;
  ${mediaTablet(`
  margin: 20px 10px 0 10px;
  `)}
  label {
    font-size: 18px;
    font-weight: 700;
    color: #1976d2;
  }
  input {
    width: 300px;
    ${mediaTablet(`
    width: 250px;
    `)}
  }
  fieldset {
    border-color: #cfefff;
  }
`;

export const FormFlexContainer = styled.div`
  margin-bottom: 40px;
  ${mediaTablet(`
  display: flex;
  margin-bottom: 40px;
  `)}
`;

export const AutocompleteBox = styled.div`
  position: relative;
`;

export const StationsList = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 100px;
  margin: 0;
  padding: 0;
  overflow: auto;
  top: 30;
  left: 0;
  z-index: 10;
  border: 1px solid #e0e0e0;
  padding: 0 10px 0 10px;
  border-radius: 5px;
  background-color: #fff;
`;

export const StationsItem = styled.li`
  padding: 5px 0;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #e0e0e0;
  }
`;
