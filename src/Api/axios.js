import axios from "axios";
const axiosInstance =axios.create({
  //using api locally
      // baseURL:"http://localhost:5000",

      //using functions locally
    // baseURL:"http://127.0.0.1:5001/clone-5e1e5/us-central1/api"

    //deployed api
    baseURL:"https://amazon-backend-6iwz.onrender.com"
});
export{axiosInstance};
