import { repositoriesData } from "../repositories.js"

async function repositoriesMoreInfosToShow (userName) {
    const repositoriesMoreInfos = await repositoriesData(userName)
    return repositoriesMoreInfos
}

export { repositoriesMoreInfosToShow }