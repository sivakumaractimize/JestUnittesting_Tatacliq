import axios from "axios";
import { BASE_URL, STATUS_CODE } from "./Constants";
import { toast } from "react-toastify";

const METHOD = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

class Api {
  constructor() {
    this.baseURL = BASE_URL;
  }

  async get(url, data) {
    try {
      const response =  await this.api(METHOD.GET, url, data);
      
      // console.log("common api get",response)
      return response.data;
    } catch (error) {
      console.log("Error in GET request:", error);
      throw error;
    }
  }

  async post(url, data) {
    try {
      const response = await  this.api(METHOD.POST, url, data);
      return response.data;
    } catch (error) {
      console.log("Error in POST request:", error);
      throw error;
    }
  }

  async put(url, data) {
    try {
      const response = await this.api(METHOD.PUT, url, data);
      // console.log("put data ",response.data)
      return response.data;
    } catch (error) {
      console.log("Error in PUT request:", error);
      throw error;
    }
  }

  async delete(url, data) {
    try {
      const response = await this.api(METHOD.DELETE, url, data);
      return response.data;
    } catch (error) {
      console.log("Error in DELETE request:", error);
      throw error;
    }
  }

  api(method, url, data) {
    return new Promise((resolve, reject) => {
      let axiosConfig = {
        method: method,
        url: `${this.baseURL}/${url}`, 
        headers: this.setHeaders(data),
      };

      if (data) {
        axiosConfig.data = data;
      }

      axios(axiosConfig)
        .then((response) => {
          if (response.status === STATUS_CODE.INTERNAL_SERVER_ERROR) {
            toast.error("Something went wrong!!");
          }
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  setHeaders(data) {
    let headers = {
      "accept-language": "en",
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.getItem("token"),
    };

    if (data && data.isMultipart) {
      headers["Content-Type"] = "multipart/form-data";
    }

    if (data && data.headers) {
      for (let key in data.headers) {
        if (data.headers.hasOwnProperty(key)) {
          headers[key] = data.headers[key];
        }
      }
    }

    return headers;
  }
}

export default Api;
