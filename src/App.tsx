// import React from "react";
import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "@/styles/GlobalStyles";
import { router } from "@/router";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <RouterProvider router={router} />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  width: 100%;
  max-width: 393px;
  min-height: 100vh;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;
