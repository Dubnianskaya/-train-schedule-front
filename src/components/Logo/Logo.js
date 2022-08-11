import { LogoContainer, LogoSign } from "./Logo.styled";
import sprite from "../../styles/assets/icon-sprite.svg";

export const Logo = () => {
  return (
    <LogoContainer>
      <svg width="80" height="40">
        <use href={`${sprite}#icon-train`}></use>
      </svg>
      <LogoSign>TRAINS</LogoSign>
    </LogoContainer>
  );
};
