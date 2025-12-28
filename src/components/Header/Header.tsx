import { useState } from "react";
import * as S from "@/components/Header/Header.style";

import HamburgerIcon from "@/assets/menu-burger.svg";
import BackIcon from "@/assets/back.svg";
import Logo from "@/assets/Logo.svg";

import HamburgerBar from "@/components/HamburgerBar/HamburgerBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <S.HeaderContainer>
        <S.LeftButton
          type="button"
          onClick={isOpen ? handleClose : handleToggle}
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <S.LeftIcon src={isOpen ? BackIcon : HamburgerIcon} alt="" />
        </S.LeftButton>

        <S.Logo src={Logo} alt="BlockPick" />
      </S.HeaderContainer>

      <HamburgerBar isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default Header;
