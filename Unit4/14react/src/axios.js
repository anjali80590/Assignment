import axios from "axios";

const instance = axios.create({
  baseURL: "https://project-tracker-app-ccb96-default-rtdb.firebaseio.com/",
});

export default instance;
