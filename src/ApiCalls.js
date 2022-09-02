const apiCall = (data) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2${data}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response);
      }
    })
    .catch((error) =>{
      return true
    });
};
const getData = (data, error) => {
  let promise = Promise.all([apiCall(data)]).then((movieData) => {
    return movieData;
  });
  return promise;
};
export { getData };
