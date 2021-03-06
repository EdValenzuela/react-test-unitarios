

export const getDataCallback = callback => {
    const name = 'gerardo gallegos';

    setTimeout(() =>{
        callback(name)
    }, 300)
}

export const getDataPromise = () =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('gerardo gallegos')
        }, 300)
    } )
}

export const getDataPromiseError = () =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            reject('error')
        }, 300)
    } )
}

export const getUsers = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/5');
    const user = await res.json()
    return user;
}