import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5f392015eb5f45798e9a9ecb57b0a727",
  },
});
