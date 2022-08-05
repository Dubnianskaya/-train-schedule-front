import styled from "@emotion/styled";
import { mediaTablet } from "../../functions/media";
import { NavLink } from "react-router-dom";

export const TrainsListContainer = styled.div`
  margin-top: 40px;
`;

export const TrainsPlugTitle = styled.h2`
  font-size: 28px;
  text-align: center;
  color: #000;
  ${mediaTablet(`
  font-size: 36px;
  line-height: 26px;
    `)}
`;

export const Link = styled(NavLink)`
  color: #1976d2;
  text-decoration: none;
  display: block;
  margin-top: 15px;
  &:hover,
  &:focus {
    text-shadow: 2px 2px 2px #1976d2;
  }
`;

export const TrainListSeachForm = styled.form`
  display: flex;
  flex-direction: column;

  ${mediaTablet(`
flex-direction: row;
align-items: flex-end;
  `)}
`;
