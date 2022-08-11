import styled from "@emotion/styled";

const setDisabledColor = ({ isDisabled }) => {
  return isDisabled ? "#E7E7E7" : "#fff";
};

export const CardContainer = styled.div`
  position: relative;
  padding: 40px 0;
  width: 400px;
  background-color: ${setDisabledColor};
`;

export const DisabledTitle = styled.h2`
  text-align: center;
  position: absolute;
  font-size: 14px;
  font-weight: 400;
  color: #e80b1f;
  top: 5px;
  left: 150px;
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const DataTitle = styled.p`
  fonst-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: rgb(33, 33, 33);
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const TrainData = styled.p`
  font-size: 18px;
  line-height: 26px;
  color: #1976d2;
`;
