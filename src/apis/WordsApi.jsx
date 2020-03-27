import axios from "axios";

export default axios.create({
  baseURL: "https://api.datamuse.com",
  params: {
    max: 150
  }
});
