const apiCall = (data) => {
  return fetch(`https://funky-nightshades-api.vercel.app${data}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response);
      }
    })
    .catch((error) => {
      return true;
    });
};
const getData = (data, error) => {
  let promise = Promise.all([apiCall(data)]).then((movieData) => {
    return movieData;
  });
  return promise;
};
export { getData };
