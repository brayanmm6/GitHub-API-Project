import { checkArrayLength } from "./validations.js"
import { user } from "./objects/user.js"
import { getRepositoriesMoreInformations } from "./services/repositories.js"
import { checkAllValuesEquality } from "./validations.js"

async function repositoriesData (userName) {
    if(checkArrayLength(user.repositories) === false) return
    const repositoriesMoreInformations = []
    const repositorieLength = user.repositories.length
    
    for(let counter = 0 ; counter < repositorieLength ; counter += 1){
        const repositorie = await getRepositoriesMoreInformations(userName, user.repositories[counter].name)
        repositoriesMoreInformations.push(repositorie)
        if(checkAllValuesEquality(repositoriesMoreInformations.length, repositorieLength)){
            return repositoriesMoreInformations
        }
    }
}

export { repositoriesData }