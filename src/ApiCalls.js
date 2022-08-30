const apiCall = (data, handleError) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${data}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => handleError(error));
};
const getData = (data) => {
  let promise = Promise.all([apiCall(data)]).then((movieData) => {
    return movieData;
  });
  return promise;
};
export { getData };
