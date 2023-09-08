import { baseUrl, repositoriesQuantity, reposUrl } from "../variables.js"

async function getRepositories (userName){
    const url = `${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`
    const response = await fetch(url)
    return response.json()
}

async function getRepositoriesMoreInformations (userName, repositorie) {
    const url = `${reposUrl}/${userName}/${repositorie}`
    const response = await fetch(url)
    return response.json()
}

export {getRepositories, getRepositoriesMoreInformations}