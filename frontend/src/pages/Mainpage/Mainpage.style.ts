import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  height: 100dvh;
  background: #f2f2f2;
  position: relative;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Body = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  width: 100%;
  padding: 23px 20px 80px;

  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeroCard = styled.section`
  width: 100%;
  background: #ffffff;
  border-radius: 18px;
  padding: 20px 18px 18px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
`;

export const HeroTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  color: #2b2b2b;
  text-align: center;
`;

export const HeroSub = styled.p`
  margin: 10px 0 18px;
  font-size: 20px;
  line-height: 1.45;
  color: #5f5f5f;
  text-align: center;
  font-weight: 400;
`;

export const Highlight = styled.span`
  color: #35c3c0;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconBox = styled.div<{ $variant: "blue" | "mint" }>`
  width: 45px;
  height: 45px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ $variant }) =>
    $variant === "blue" ? "#b1cbff" : "#BAF5F5"};
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

export const FeatureText = styled.div`
  flex: 1;
`;

export const FeatureTitle = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #333333;
`;

export const FeatureDesc = styled.div`
  margin-top: 3px;
  font-size: 14px;
  font-weight: 400;
  color: #8a8a8a;
`;

export const PrimaryCTA = styled.button`
  width: 100%;
  min-height: 70px;

  border: 0;
  border-radius: 14px;

  background: #b9cffd;
  color: #505050;
  font-family: "SchoolSafetyNotification", sans-serif;
  font-weight: 400;
  font-size: 20px;

  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
  cursor: pointer;
`;

export const SectionCard = styled.section`
  width: 100%;
  background: #ffffff;
  border-radius: 18px;
  padding: 18px;

  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.06);
`;

export const SectionTitle = styled.h3`
  margin: 5px 0;
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  color: #2b2b2b;
`;

export const RecommendCard = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 18px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecommendImage = styled.div`
  width: 320px;
  height: 240px;
  border-radius: 18px;
  background: #d9d9d9;
`;

export const RecommendTextGroup = styled.div`
  margin-top: 18px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const RecommendTitle = styled.div`
  font-size: 24px;
  font-weight: 400;
  color: #4a4a4a;
`;

export const RecommendReason = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: #505050;
`;

export const RecommendScore = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: #505050;
`;

export const RecommendMore = styled.button`
  margin-top: 6px;
  border: 0;
  background: transparent;
  padding: 0;

  font-size: 16px;
  font-weight: 400;
  color: #6b6b6b;

  cursor: pointer;
`;

export const Dots = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.button<{ $active?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 999px;

  border: 2px solid #2c3e50;
  background: ${({ $active }) => ($active ? "#2c3e50" : "transparent")};

  padding: 0;
  cursor: pointer;
`;

export const BottomSpacer = styled.div`
  height: 90px;
`;
