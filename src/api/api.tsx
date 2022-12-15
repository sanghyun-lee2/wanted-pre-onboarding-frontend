import axios from "axios";

//const API_ENDPOINT = "http://localhost:8000/";
const API_ENDPOINT = "https://pre-onboarding-selection-task.shop/";

const API = axios.create({
   baseURL: API_ENDPOINT,
   headers: {
      "Content-Type": "application/json",
      withCredentials: "true",
   },
});

export default API;
