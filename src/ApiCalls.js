const apiCall = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(response => {
        if (response.ok) {
            return response.json()
        } throw Error(response.statusText)
    })
}
const getData = () => {
    let promiseVar = Promise.all([apiCall()])
        .then(data => {
            return data;
        })
    return promiseVar;
}
export { getData };