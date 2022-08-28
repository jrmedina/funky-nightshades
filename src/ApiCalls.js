const apiCall = (data) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${data}`).then(response => {
        if (response.ok) {
            return response.json()
        } throw Error(response.statusText)
    })
}
const getData = (data) => {
    let promiseVar = Promise.all([apiCall(data)])
        .then(movieData => {
            return movieData;
        })
    return promiseVar;
}
export { getData };