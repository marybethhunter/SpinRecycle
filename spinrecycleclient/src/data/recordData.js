import axios from "axios";

const dbURL = "https://localhost:7115/api";

const getAllRecords = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbURL}/records.json`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

export default getAllRecords;
