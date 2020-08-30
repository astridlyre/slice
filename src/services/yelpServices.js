import axios from "axios";

const getBusinesses = async (term, location) => {
  const request = await axios.get(
    `http://localhost:3001/api/businesses/${term}/${location}`
  );
  return request;
};

export { getBusinesses };
