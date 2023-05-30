import axios from "axios";

const reviews = axios.create({
  baseURL: "https://nc-be-games-puql.onrender.com/api",
});

export default reviews;
