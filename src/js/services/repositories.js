import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getRepositories (userName){
    const url = `${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`
    const response = await fetch(url)
    return await response.json()
}

export {getRepositories}