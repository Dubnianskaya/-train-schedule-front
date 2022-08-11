import styled from "@emotion/styled";
import { mediaTablet } from "../../functions/media";
import train from "../../styles/images/train.png";

export const MainContainer = styled.div`
  padding: 0 20px;
  margin: 0 auto;
`;

export const StyledContainer = styled.div`
  min-height: 100vh;

  ${mediaTablet(`
width: 100%;
background-image: url(${train});
background-size: 800px 403px;
background-position: right 0 bottom 0;
background-repeat: no-repeat;
`)}
`;

export const MainPageWrapper = styled.div`
  padding-bottom: 30px;
  padding-top: 50px;
  ${mediaTablet(`
  padding-top: 200px;
  `)}
`;
export const TrainPageWrapper = styled.div`
  padding-bottom: 30px;
  padding-top: 30px;
  ${mediaTablet(`
  padding-top: 120px;
  `)}
`;
export const TrainsFilterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TrainsPlugContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  ${mediaTablet(`
  padding-top: 200px;
  `)}
`;
