import axios from "axios";
import { actions } from "@/store";
import { MessageBox } from "mint-ui";

// const BASE_API = "http://csapi.syschain.cn/v1/";

// const _env_ = qs.parse(location.search.replace("?", ""))._env_;
// headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },

const api = axios.create({
  baseURL: "/api/v1", // api的base_url
  timeout: 30000, // request timeout
  withCredentials: true,
  validateStatus: null
});

// request interceptor
api.interceptors.request.use(
  config => {
    const token = actions.getToken();
    if (token) {
      config.headers["Access-Token"] = token;
    }
    // console.log("req");

    return config;
  },
  error => {
    // Do something with request error
    console.log("reqerror");
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    if (response && response.data.code >= 200 && response.data.code < 300) {
      return response.data;
    } else {
      if (response.data.code === 401) {
        MessageBox.confirm("登录已过期,请重新登录").then(() => {
          window.location = location.protocol + location.host + "/#/login";
        });
        return;
      }
      MessageBox({
        title: response.request.responseURL,
        message: response.data.msg || "接口出错",
        confirmButtonText: "知道了"
      });

      return Promise.reject(response.data);
    }
  },
  function(error) {
    MessageBox({
      title: "提示",
      message: error,
      confirmButtonText: "知道了"
    });
    return Promise.reject(error);
    // throw new Error(error);
  }
);

export default api;
