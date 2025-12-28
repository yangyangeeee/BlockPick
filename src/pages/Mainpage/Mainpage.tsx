import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import * as S from "@/pages/Mainpage/Mainpage.style";

import Icon1 from "@/assets/nav-marker.svg";
import Icon2 from "@/assets/data.svg";
import Icon3 from "@/assets/shop.svg";
import Icon4 from "@/assets/smile.svg";

const MainPage = () => {
  return (
    <S.Page>
      <Header />

      <S.Body>
        <S.HeroCard>
          <S.HeroTitle>내 창업에 맞는 골목을 찾아보세요!</S.HeroTitle>

          <S.HeroSub>
            <S.Highlight>데이터</S.Highlight>로 찾고,{" "}
            <S.Highlight>AI</S.Highlight>가 추천해주는
            <br />
            나만의 창업 공간
          </S.HeroSub>

          <S.FeatureList>
            <S.FeatureItem>
              <S.IconBox $variant="blue">
                <S.Icon src={Icon1} alt="맞춤형 골목 추천" />
              </S.IconBox>
              <S.FeatureText>
                <S.FeatureTitle>맞춤형 골목 추천</S.FeatureTitle>
                <S.FeatureDesc>
                  AI가 분석한 최적의 창업 골목을 추천 받아요!
                </S.FeatureDesc>
              </S.FeatureText>
            </S.FeatureItem>

            <S.FeatureItem>
              <S.IconBox $variant="mint">
                <S.Icon src={Icon2} alt="상권 데이터 분석" />
              </S.IconBox>
              <S.FeatureText>
                <S.FeatureTitle>상권 데이터 분석</S.FeatureTitle>
                <S.FeatureDesc>
                  유동인구, 경쟁도, 상권 특성을 한눈에 파악해요!
                </S.FeatureDesc>
              </S.FeatureText>
            </S.FeatureItem>

            <S.FeatureItem>
              <S.IconBox $variant="blue">
                <S.Icon src={Icon3} alt="공간 매칭" />
              </S.IconBox>
              <S.FeatureText>
                <S.FeatureTitle>공간 매칭</S.FeatureTitle>
                <S.FeatureDesc>
                  팝업스토어부터 정식 매장까지! <br /> 적합한 공간을 찾아줘요!
                </S.FeatureDesc>
              </S.FeatureText>
            </S.FeatureItem>

            <S.FeatureItem>
              <S.IconBox $variant="mint">
                <S.Icon src={Icon4} alt="창업 초심자 특화" />
              </S.IconBox>
              <S.FeatureText>
                <S.FeatureTitle>창업 초심자 특화</S.FeatureTitle>
                <S.FeatureDesc>예비 창업자를 위한 맞춤 솔루션</S.FeatureDesc>
              </S.FeatureText>
            </S.FeatureItem>
          </S.FeatureList>
        </S.HeroCard>

        <S.PrimaryCTA type="button">골목 추천을 시작할까요?</S.PrimaryCTA>

        <S.SectionCard>
          <S.SectionTitle>오늘의 추천 골목</S.SectionTitle>

          <S.RecommendCard>
            <S.RecommendImage />

            <S.RecommendTextGroup>
              <S.RecommendTitle>골목 이름</S.RecommendTitle>
              <S.RecommendReason>한 줄 추천 이유</S.RecommendReason>
              <S.RecommendScore>상권 점수</S.RecommendScore>

              <S.RecommendMore type="button">자세히 보기</S.RecommendMore>
            </S.RecommendTextGroup>

            <S.Dots>
              <S.Dot type="button" $active />
              <S.Dot type="button" />
              <S.Dot type="button" />
            </S.Dots>
          </S.RecommendCard>
        </S.SectionCard>

        <S.BottomSpacer />
      </S.Body>

      <NavBar />
    </S.Page>
  );
};

export default MainPage;
