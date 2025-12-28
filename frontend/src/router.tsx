import { createBrowserRouter } from "react-router-dom";

import LoginPage from "@/pages/Login/Login";
import SignupPage from "@/pages/Signup/Signup";
import MainPage from "@/pages/Mainpage/Mainpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    children: [
      {
        path: "/main",
        element: <MainPage />,
      },
      // { path: "/survey", element: <SurveyPage /> },
      // { path: "/mypage", element: <MyPage /> },
    ],
  },
]);
