import * as S from "@/components/NavBar/NavBar.style";
import { Link } from "react-router-dom";

import HOME from "@/assets/home.svg";
import SURVEY from "@/assets/map.svg";
import FINDSPACE from "@/assets/building.svg";
import COMMUNITY from "@/assets/community.svg";

const NavBar = () => {
  return (
    <S.NavBarContainer>
      <Link to="/home">
        <S.NavItem>
          <S.NAV_Image src={HOME} alt="홈" />
          <S.Title>홈</S.Title>
        </S.NavItem>
      </Link>

      <Link to="/survey">
        <S.NavItem>
          <S.NAV_Image src={SURVEY} alt="골목 추천" />
          <S.Title>골목 추천</S.Title>
        </S.NavItem>
      </Link>

      <Link to="/findspace">
        <S.NavItem>
          <S.NAV_Image src={FINDSPACE} alt="공간 찾기" />
          <S.Title>공간 찾기</S.Title>
        </S.NavItem>
      </Link>

      <Link to="/community">
        <S.NavItem>
          <S.NAV_Image src={COMMUNITY} alt="커뮤니티" />
          <S.Title>커뮤니티</S.Title>
        </S.NavItem>
      </Link>
    </S.NavBarContainer>
  );
};

export default NavBar;
