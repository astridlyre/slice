import axios from "axios";

const getBusinesses = async (term, location) => {
  const request = axios.get(`/api/businesses/${term}/${location}`);
  return request.then((response) => response.data);
};

export { getBusinesses };
