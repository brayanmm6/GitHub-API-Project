import { getUser } from "./services/user.js"
import { getRepositories } from "./services/repositories.js";
import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"
import { checkInputContent } from "./validations.js";
import { getEvents } from "./services/events.js"
import { userEvents } from "./objects/events.js"
import { nightMode } from "./night_mode.js";
import { repositoriesMoreInfosToShow } from "./objects/repositories.js";
import { repositoriesMoreInfosData } from "./repositories.js";

const searchButton = document.getElementById("github-user-name-submit")
const userInput = document.getElementById("github-user-name")

nightMode()

async function getUserData (userName) {
    const userNameResponse = await getUser(userName)
    if(userNameResponse == false){
        userInput.classList.add("error-highlight")
        screen.renderUser(false)
        return
    }
    userInput.classList.remove("error-highlight")
    
    const userRepositoriesResponse = await getRepositories(userName)
    const userEventsResponse = await getEvents(userName)
    user.setInfo(userNameResponse)
    user.setRepositories(userRepositoriesResponse)
    userEvents.setEvents(userEventsResponse)

    const repositoriesMoreInfos = await repositoriesMoreInfosData(userName)
    repositoriesMoreInfosToShow.setInfos(repositoriesMoreInfos)

    screen.renderUser(user)
    screen.renderRepositories(user.repositories)
    screen.renderEvents(userEvents.events)
    screen.renderRepositoriesMoreInfos(repositoriesMoreInfosToShow.repositoriesMoreInfos)
}

searchButton.addEventListener("click", () => {
    if(userInput.value.length === 0){
        checkInputContent(false)
        userInput.classList.add("error-highlight")
        return
    }
    userInput.classList.remove("error-highlight") 
    getUserData(userInput.value)
    userEvents.clearEvents() // para limpar o array com os eventos toda vez que receber um userName
})

userInput.addEventListener("keypress", enter => {
    const key = enter.which || enter.keyCode    
    const userName = enter.target.value
    const keyPressed = key === 13
    if(keyPressed && key === 13){
        if(userInput.value.length === 0){
            checkInputContent(false)
            userInput.classList.add("error-highlight")
            return
        }
        userInput.classList.remove("error-highlight")
        getUserData(userName)
        userEvents.clearEvents() // para limpar o array com os eventos toda vez que receber um userName
    }
})
