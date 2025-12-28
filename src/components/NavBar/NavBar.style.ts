import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 393px;
  height: 81px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  padding-top: 21px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const NAV_Image = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 10px;
  color: #374957;
`;
