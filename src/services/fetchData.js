import cloud from "./cloud";

const CLOUD_API = process.env.CLOUD_API;

export const fetchKeyStat = async(symbol) => {
  try {
    const response = await cloud.get(`/stock/${symbol}/stats/5?token=${CLOUD_API}`);
    return response.data
  } catch (error) {
    console.error("fetch key stat : ", error);
  }
};

export const fetchPrevPrice = async(symbol) => {
  try {
    const response = await cloud.get(`/stock/${symbol}/previous?token=${CLOUD_API}`);
    return response.data
  } catch (error) {
    console.error("fetch privious price : ", error);
  }
};

export const fetchHistory = async(symbol, time) => {
  try {
    const response = await cloud.get(`/stock/${symbol}/chart/${time}?token=${CLOUD_API}`);
    return response.data
  } catch (error) {
    console.error("fetch history : ", error);
  }
}

export const fetchCompany = async(symbol) => {
  try {
    const response = await cloud.get(`/stock/${symbol}/company?token=${CLOUD_API}`);
    return response.data
  } catch (error) {
    console.error("fetch company : ", error);
  }
}

export const fetchNews = async symbol => {
  try {
    const response = await cloud.get(`/stock/${symbol}/news?token=${CLOUD_API}`);
    return response.data
  } catch (error) {
    console.error("fetch news : ", error);
  }
}