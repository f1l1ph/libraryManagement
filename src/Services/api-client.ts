import axios from "axios";

export default axios.create({
  baseURL: "https://librarymanagement1.azurewebsites.net/",
  //baseURL: "http://localhost:5008/",
});
