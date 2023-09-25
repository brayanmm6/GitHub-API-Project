import { checkArrayLength } from "./validations.js"
import { user } from "./objects/user.js"
import { getRepositoriesMoreInformations } from "./services/repositories.js"
import { checkAllValuesEquality } from "./validations.js"

async function repositoriesMoreInfosData (userName) {
    if(checkArrayLength(user.repositories) === false) return
    const repositoriesMoreInformations = []
    const repositorieLength = user.repositories.length

    return new Promise (resolve => {
        user.repositories.forEach(async repositorieData => {
            const repositorieName = repositorieData.name
            const repositorie = await getRepositoriesMoreInformations(userName, repositorieName)
            repositoriesMoreInformations.push(repositorie)
            if(checkAllValuesEquality(repositorieLength, repositoriesMoreInformations.length)){
                resolve(repositoriesMoreInformations)
            }  
        })
    })
}

export { repositoriesMoreInfosData }