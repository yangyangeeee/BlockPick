import styled from "styled-components";

export const Wrapper = styled.div<{ $open: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 150;
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
`;

export const Overlay = styled.button<{ $open: boolean }>`
  position: absolute;
  inset: 0;

  border: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0);

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: opacity 220ms ease;
  z-index: 150;
`;

// export const Drawer = styled.aside<{ $open: boolean }>`
//   position: absolute;
//   top: 74px;
//   left: 0;
//   width: 62%;
//   max-width: 260px;
//   height: calc(100vh - 74px);
//   background: #ffffff;
//   box-shadow: 2px 0 10px rgba(0, 0, 0, 0.08);
//   transform: translateX(${({ $open }) => ($open ? "0" : "-100%")});
//   transition: transform 240ms ease;

//   font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
//     sans-serif;

//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
// `;

export const Drawer = styled.aside<{ $open: boolean }>`
  position: absolute;
  width: 62%;
  max-width: 260px;
  min-height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.08);
  //   transform: translateX(0);
  opacity: 1;
  transition: transform 240ms ease, opacity 200ms ease;
  will-change: transform, opacity;

  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: space-around;
`;

export const MenuTop = styled.div`
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const MainItem = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  text-align: left;

  font-size: 18px;
  font-weight: 600;
  color: #3a3a3a;

  cursor: pointer;
`;

export const Item = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  text-align: left;

  font-size: 18px;
  font-weight: 600;
  color: #4a4a4a;

  cursor: pointer;
`;

export const Divider = styled.div`
  height: 1px;
  background: #efefef;
`;

export const MenuBottom = styled.div`
  padding: 22px 18px;
  overflow-y: auto;
`;

/* ✅ 너 TSX에서 쓰는 Brand / BrandLogo / SubText 지원 */
export const Brand = styled.div`
  margin: 10px 0 26px;
`;

export const BrandLogo = styled.img`
  height: 20px;
  width: auto;
  object-fit: contain;
  opacity: 0.55;
`;

export const SubText = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #9a9a9a;
`;

export const SectionTitle = styled.div`
  margin-top: 18px;
  font-size: 14px;
  font-weight: 700;
  color: #8a8a8a;
`;

export const TextList = styled.ul`
  margin: 8px 0 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: 13px;
  color: #b1b1b1;
`;

export const TextBlock = styled.div`
  margin-top: 8px;
  font-size: 13px;
  color: #b1b1b1;
  line-height: 1.55;
`;
