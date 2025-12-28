import styled from "styled-components";

export const Page = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const CenterWrapper = styled.div`
  width: 100%;
  max-width: 393px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 130px;
`;

export const LogoWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 280px;
  height: auto;
  object-fit: contain;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 272px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-family: "SchoolSafetyNotification", sans-serif;
  font-weight: 400;
  color: #9a9a9a;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 14px;
  border: 1.5px solid #9d9d9d;
  border-radius: 10px;
  font-size: 14px;
  color: #222;
  outline: none;

  &:focus {
    border-color: #505050;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 10px;
  border: 0;
  border-radius: 10px;
  background: #35c3c0;
  color: #ffffff;
  font-size: 16px;
  font-family: "SchoolSafetyNotification", sans-serif;
  font-weight: 400;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const SignupRow = styled.div`
  margin-top: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 13px;
`;

export const SignupText = styled.span`
  color: #9a9a9a;
  font-family: "SchoolSafetyNotification", sans-serif;
  font-weight: 400;
`;

export const SignupLink = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  color: #2f2f2f;
  font-family: "SchoolSafetyNotification", sans-serif;

  font-weight: 400;

  cursor: pointer;
`;
