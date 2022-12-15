import React, { useState, useCallback, useEffect } from "react";
import { Button } from "react-bootstrap";
import { authSignUpService, authSignInService } from "../service/authService";
import { useNavigate } from "react-router-dom";

function Main() {
   const navigate = useNavigate();

   // 회원가입 이메일, 비밀번호, 제출 버튼
   const [emailSignUp, setEmailSignUp] = useState<string>("");
   const [pwSignUp, setPwSignUp] = useState<string>("");
   const [signUpBtnDisabled, setSignUpBtnDisabled] = useState(false);

   // 로그인 이메일, 비밀번호, 제출 버튼
   const [emailSignIn, setEmailSignIn] = useState<string>("");
   const [pwSignIn, setPwSignIn] = useState<string>("");
   const [signInBtnDisabled, setSignInBtnDisabled] = useState(false);

   const onSubmitSignUp = useCallback(
      async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         authSignUpService(emailSignUp, pwSignUp);
      },
      [emailSignUp, pwSignUp]
   );

   const onSubmitSignIn = useCallback(
      async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         try {
            const res = await authSignInService(emailSignIn, pwSignIn);
            if (res.access_token) {
               navigate("/todo");
            }
         } catch {
            alert("로그인 실패");
         }
      },
      [emailSignIn, pwSignIn]
   );

   const onChangeEmailSignUp = (e: React.FormEvent<HTMLInputElement>) => {
      setEmailSignUp(e.currentTarget.value);
   };

   const onChangePwSignUp = (e: React.FormEvent<HTMLInputElement>) => {
      setPwSignUp(e.currentTarget.value);
   };

   const onChangeEmailSignIn = (e: React.FormEvent<HTMLInputElement>) => {
      setEmailSignIn(e.currentTarget.value);
   };

   const onChangePwSignIn = (e: React.FormEvent<HTMLInputElement>) => {
      setPwSignIn(e.currentTarget.value);
   };

   const handleSignUpInput = () => {
      emailSignUp.includes("@") && pwSignUp.length >= 8
         ? setSignUpBtnDisabled(false)
         : setSignUpBtnDisabled(true);
   };

   const handleSignInInput = () => {
      emailSignIn.includes("@") && pwSignIn.length >= 8
         ? setSignInBtnDisabled(false)
         : setSignInBtnDisabled(true);
   };

   useEffect(() => {
      handleSignUpInput();
   }, [emailSignUp, pwSignUp]);

   useEffect(() => {
      handleSignInInput();
   }, [emailSignIn, pwSignIn]);

   return (
      <>
         <form onSubmit={onSubmitSignUp}>
            <h1>회원가입</h1>
            Email <input type="text" onChange={onChangeEmailSignUp}></input>
            PW <input type="password" onChange={onChangePwSignUp}></input>
            <Button
               variant="primary"
               type="submit"
               disabled={signUpBtnDisabled}
            >
               제출
            </Button>
         </form>
         <form onSubmit={onSubmitSignIn}>
            <h1>로그인</h1>
            Email <input type="text" onChange={onChangeEmailSignIn}></input>
            PW <input type="password" onChange={onChangePwSignIn}></input>
            <Button
               variant="primary"
               type="submit"
               disabled={signInBtnDisabled}
            >
               제출
            </Button>
         </form>
      </>
   );
}

export default Main;
