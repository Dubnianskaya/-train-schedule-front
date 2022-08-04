import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

export const FormTitle = styled.h1`
  font-size: 36px;
  line-height: 26px;
  margin-bottom: 32px;
  text-align: center;
  color: ##3f51b5;
  padding-top: 160px;
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
`;

export const FormFlexContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  padding: 13px 25px;
  width: 210px;
  letter-spacing: 0.04em;
  cursor: pointer;
  color: #fff;
  background-color: #3f51b5;
  border: none;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  transition: transform ('0.5s ease 0s'),
   
  &:hover,
  &:focus {
    transform: scale(1.1);
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
  z-index: 5;
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
