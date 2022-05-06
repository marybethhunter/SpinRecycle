import axios from "axios";

//dummy URL - fix below promise - just adding to skeleton right now
const dbURL = "www.google.com";

const getCart = () =>
  new Promise((resolve, reject) => {
    axios
      .get(`${dbURL}/cart.json`)
      .then((response) => resolve(Object.values(response.data)))
      .catch(reject);
  });

  const deleteCartItem = (cartobj) => new Promise((resolve, reject) => {
    axios
      .delete(`${dbURL}/cart/${cartobj.Id}.json`)
      .then(() => getCart().then(resolve))
      .catch(reject);
  });

export { getCart, deleteCartItem };