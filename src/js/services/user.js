import { baseUrl } from "../variables.js"

async function getUser (userName) {
    const url = `${baseUrl}/${userName}`
    const response = await fetch(url)
    return (response.ok? await response.json() : false) 
}

export {getUser}