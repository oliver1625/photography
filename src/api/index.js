import axios from 'axios'

// const endpoint = "http://localhost:8080/api/tutorial";
export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
      "Content-type": "multipart/form-data",
      "Accept": "application/json",
    }
  });
