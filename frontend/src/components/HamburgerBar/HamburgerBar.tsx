import { useEffect } from "react";
import * as S from "./HamburgerBar.style";

import Logo from "@/assets/Logo-gray.svg";

type HamburgerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const HamburgerBar = ({ isOpen, onClose }: HamburgerProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <S.Wrapper $open={isOpen}>
      <S.Overlay
        type="button"
        $open={isOpen}
        onClick={onClose}
        aria-label="메뉴 닫기"
      />
      <S.Drawer $open={isOpen}>
        <S.MenuTop>
          <S.MainItem>마이페이지</S.MainItem>
          <S.Item>내가 저장한 골목</S.Item>
          <S.Item>내 팝업 운영 기록</S.Item>
          <S.Item>설정</S.Item>
        </S.MenuTop>

        <S.Divider />

        <S.MenuBottom>
          <S.Brand>
            <S.BrandLogo src={Logo} alt="BlockPick" />
            <S.SubText>AI 기반 골목 상권 추천 플랫폼</S.SubText>
          </S.Brand>

          <S.SectionTitle>서비스</S.SectionTitle>
          <S.TextList>
            <li>골목 추천</li>
            <li>공간 매칭</li>
            <li>상권 분석</li>
            <li>창업 가이드</li>
          </S.TextList>

          <S.SectionTitle>문의</S.SectionTitle>
          <S.TextBlock>
            이메일 : yangseoyun311@gmail.com
            <br />
            전화 : 010-4790-0242
            <br />
            운영시간 : 평일 10:00 - 18:00
          </S.TextBlock>
        </S.MenuBottom>
      </S.Drawer>
    </S.Wrapper>
  );
};

export default HamburgerBar;
