import axios from "axios";
const KEY = "AIzaSyDKLCqg1zyde9TMrN8m3HWf8kNlxw_BlNs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
