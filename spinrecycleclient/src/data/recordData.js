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

  const deleteRecord = (recordId) => new Promise((resolve, reject) => {
    axios
      .delete(`${dbURL}/records/${recordId}`)
      .then(() => getAllRecords().then(resolve))
      .catch(reject);
  });
  
  const addNewRecord = (recordObj) => new Promise((resolve, reject) => {
    axios
      .post(`${dbURL}/records`, recordObj)
      .then(resolve)
      .catch(reject);
  });
  
  const updateRecord = (recordId, obj) => new Promise((resolve, reject) => {
    axios
      .put(`${dbURL}/records/${recordId}`, obj)
      .then(() => getAllRecords().then(resolve))
      .catch(reject);
  });
  
  const getSingleRecord = (recordId) => new Promise((resolve, reject) => {
    axios
      .get(`${dbURL}/records/${recordId}`)
      .then((response) => resolve(response.data))
      .catch(reject);
  });

export { getAllRecords, addRecordToCart, deleteRecord, addNewRecord, updateRecord, getSingleRecord };
