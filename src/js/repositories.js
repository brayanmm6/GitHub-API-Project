import { checkRepositories } from "./validations.js"
import { user } from "./objects/user.js"
import { getRepositoriesMoreInformations } from "./services/repositories.js"

async function repositoriesData (userName) {
    if(checkRepositories(user.repositories) === false) return
    const repositoriesMoreInformations = []
    const repositorieLength = user.repositories.length
    for(let cont = 0 ; cont < repositorieLength ; cont += 1){
        const repositorie = await getRepositoriesMoreInformations(userName, user.repositories[cont].name)
        repositoriesMoreInformations.push(repositorie)
        if(repositoriesMoreInformations.length === repositorieLength){
            return repositoriesMoreInformations
        }
    }
}

export { repositoriesData }