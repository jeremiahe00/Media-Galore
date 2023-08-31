export const registerUser = async(username:string, password:string) => { // good
    const userResponse = await fetch('http://127.0.0.1:8000/register/', {method: "POST", body: JSON.stringify({username, password})})
    return userResponse.json()
}


// export const registerUser2 = function () { // bad

// }

// export function lala () { // okay

// }