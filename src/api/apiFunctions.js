import config from "../config"
import { API_URLS } from "../constants/apiUrls";
import { getHeaders } from "./headers";
import httpMethods from "./httpMethods";

export const getCityProductData = async (urlString) => {
  const baseUrl = `${config.mainApiEndpoint}${API_URLS.CITY_PRODUCT_INFO}${urlString}`;
  const result = await httpMethods.get(baseUrl,getHeaders());
  return result;
};
