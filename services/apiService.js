import axios from "axios";


const apiResource = (customHeaders = {}) => {
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;

  const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Origin": `${baseURL}/`,
  };

  const service = axios.create({
    baseURL: `${baseURL}`,
    withCredentials: false,
    // headers: customHeaders ? fileHeaders: defaultHeaders,
  });


  return {
    get: async (url) => {
      try {
        const data = service.get(url);
        const resolvedData = await Promise.resolve(data);
        const exactData = resolvedData?.data;
        return exactData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    post: async ({ url, payload }) => {
      try {
        const data = service.post(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    patch: async ({ url, payload }) => {
      try {
        const data = service.patch(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    delete: async ({ url, payload }) => {
      try {
        const data = service.delete(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },

    put: async ({ url, payload }) => {
      try {
        const data = service.put(url, payload);
        const resolvedData = await Promise.resolve(data);
        return resolvedData;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  };
};

export {apiResource}; 
export const apiService = apiResource();
