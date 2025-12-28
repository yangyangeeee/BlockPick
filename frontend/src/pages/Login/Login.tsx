import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/pages/Login/Login.style";

import Logo from "@/assets/Logo.svg";

type LoginForm = {
  loginId: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginForm>({
    loginId: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 연동 전 임시 동작: 입력만 확인하고 /main 이동
    const loginId = form.loginId.trim();
    const password = form.password.trim();

    if (!loginId || !password) return;

    navigate("/main");
  };

  const isDisabled =
    form.loginId.trim().length === 0 || form.password.trim().length === 0;

  return (
    <S.Page>
      <S.CenterWrapper>
        <S.LogoWrap>
          <S.Logo src={Logo} alt="BlockPick" />
        </S.LogoWrap>

        <S.Form onSubmit={handleSubmit}>
          <S.Field>
            <S.Label htmlFor="loginId">아이디</S.Label>
            <S.Input
              id="loginId"
              name="loginId"
              value={form.loginId}
              onChange={handleChange}
              autoComplete="username"
            />
          </S.Field>

          <S.Field>
            <S.Label htmlFor="password">비밀번호</S.Label>
            <S.Input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </S.Field>

          <S.LoginButton type="submit" disabled={isDisabled}>
            로그인
          </S.LoginButton>

          <S.SignupRow>
            <S.SignupText>아직 계정이 없으신가요?</S.SignupText>
            <S.SignupLink type="button" onClick={() => navigate("/signup")}>
              회원가입
            </S.SignupLink>
          </S.SignupRow>
        </S.Form>
      </S.CenterWrapper>
    </S.Page>
  );
};

export default LoginPage;
