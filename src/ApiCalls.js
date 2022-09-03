const apiCall = (data) => {
  return fetch(`http://localhost:3001${data}`)
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
