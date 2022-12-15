import API from "../api/api";

export const authSignUpService = async (email: string, pw: string) => {
   API.post(
      "/auth/signup",
      {
         email: email,
         password: pw,
      },
      {}
   )
      .then((res) => {
         window.alert("회원가입 성공");
      })
      .catch((err) => window.alert("회원가입 실패"));
};

export const authSignInService = async (email: string, pw: string) => {
   return API.post(
      "/auth/signin",
      {
         email: email,
         password: pw,
      },
      {}
   ).then((res) => {
      //window.alert("로그인 성공");
      if (res.data.access_token) {
         localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
   });
   //.catch((err) => window.alert("로그인 실패"));
};

export default function authHeader() {
   const userStr = localStorage.getItem("user");
   let user = null;
   // 로컬스토리지에 유저가 저장되어 있는지 검사
   if (userStr) user = JSON.parse(userStr);
   //이미 로그인 한 경우
   if (user && user.accessToken) {
      return { Authorization: "Bearer" + user.accessToken }; // HTTP Authorization Header를 반환
   } else {
      return { Authorization: "" }; // 빈 오브젝트 반환
   }
}
