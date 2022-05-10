import axios from "axios";

const dbURL = "https://localhost:7115/api";

const getCart = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbURL}/Cart`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

const deleteCartItem = (recordId) =>
  new Promise((resolve, reject) => {
    axios
      .delete(`${dbURL}/Cart/${recordId}`)
      .then(() => getCart().then(resolve))
      .catch(reject);
  });

export { getCart, deleteCartItem };
