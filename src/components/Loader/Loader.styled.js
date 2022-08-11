import styled from "@emotion/styled";
import { mediaTablet } from "../../functions/media";

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  ${mediaTablet(`
margin-top: 180px;
    `)}
`;
