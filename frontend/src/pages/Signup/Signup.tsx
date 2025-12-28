import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/pages/Signup/Signup.style";

import Logo from "@/assets/Logo.svg";

type SignupForm = {
  loginId: string;
  name: string;
  nickname: string;
  phone: string;
  password: string;
};

const SignupPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<SignupForm>({
    loginId: "",
    name: "",
    nickname: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ 연동 전 임시 동작: 입력 확인 후 로그인으로 이동
    if (isDisabled) return;
    navigate("/");
  };

  const isDisabled =
    form.loginId.trim().length === 0 ||
    form.name.trim().length === 0 ||
    form.nickname.trim().length === 0 ||
    form.phone.trim().length === 0 ||
    form.password.trim().length === 0;

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
            <S.Label htmlFor="name">이름</S.Label>
            <S.Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </S.Field>

          <S.Field>
            <S.Label htmlFor="nickname">닉네임</S.Label>
            <S.Input
              id="nickname"
              name="nickname"
              value={form.nickname}
              onChange={handleChange}
              autoComplete="nickname"
            />
          </S.Field>

          <S.Field>
            <S.Label htmlFor="phone">전화번호</S.Label>
            <S.Input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              inputMode="tel"
              autoComplete="tel"
              placeholder=""
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
              autoComplete="new-password"
            />
          </S.Field>

          <S.SubmitButton type="submit" disabled={isDisabled}>
            가입 완료
          </S.SubmitButton>
        </S.Form>
      </S.CenterWrapper>
    </S.Page>
  );
};

export default SignupPage;
