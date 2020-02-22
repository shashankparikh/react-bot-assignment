import axios from "axios";


export default {
    getData(url) {
        return {
          getResponseData: data => axios.get(url)
        };
      },
      postData(url) {
        return {
          getResponseData: data => axios.post(url)
        };
      },
};