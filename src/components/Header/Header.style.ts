import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  max-width: 393px;
  height: 74px;

  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const LeftButton = styled.button`
  position: absolute;
  left: 16px;
  width: 44px;
  height: 44px;
  border: 0;
  background: transparent;
  padding: 0;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

export const LeftIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export const Logo = styled.img`
  height: 32px;
  width: auto;
  object-fit: contain;
`;
