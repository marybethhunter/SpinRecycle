import axios from "axios";

//dummy URL - fix below promise - just adding to skeleton right now
const dbURL = "www.google.com";

const getAllRecords = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbURL}/records.json`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

export default getAllRecords;
