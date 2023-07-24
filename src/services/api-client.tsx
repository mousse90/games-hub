import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "123eafbf3b394e74a418c48e7909e386",
  },
});
