import axios from "axios";

const dbURL = "https://localhost:7115/api";

const getAllRecords = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbURL}/records`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

  const addRecordToCart = (recordId) => new Promise((resolve, reject) => {
    axios.post(`${dbURL}/Cart/${recordId}`)
      .then(resolve)
      .catch(reject);
  });

export { getAllRecords, addRecordToCart };
