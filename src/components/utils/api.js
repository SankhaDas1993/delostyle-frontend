import axios from "axios";


export const api = axios.create({
    baseURL: "https://dstbackend.onrender.com",
});

export const getAllAbout = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=about", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };

  export const getAllHome = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=home", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };

  export const getAllClients = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=clients", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };
  export const getAllCareers = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=careers", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };

  export const getAllService = async () => {
    try {
      const res = await api.get("/api/v1/getallcontent?key=services", {
        timeout: 10 * 7000,
      });
      if (Response.status === 400 || res.status === 500) throw res.data;
      console.log(res.data?.data)
      return res.data?.data;
    } catch (error) {
      throw error;
    }
  };