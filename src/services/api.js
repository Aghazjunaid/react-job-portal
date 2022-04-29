const apiFunc = {
    getAllUsers : () =>  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(result => {
        return result
    })
    .catch(err => {
        console.log(err) 
    }),
    getUserById : (id) => fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(res => res.json())
    .then(result => {
        debugger
        return result
    })
    .catch(err => {
        console.log(err) 
    }),
}

export default apiFunc