import { nightModeItems } from "./objects/night_mode.js"

const nighModeInput = document.getElementById("night-mode")

function toggleClass (htmlElement, classToToggle) {
    htmlElement.classList.toggle(classToToggle)
}

function nightMode () {
    nighModeInput.addEventListener("click", () => {
        const bodyNightMode = toggleClass(nightModeItems.bodyElement, nightModeItems.nighModeBodyBackground)
        const cardNightMode = toggleClass(nightModeItems.searchUserContainer, nightModeItems.nightModeCardBackground)
        const iconNightMode = toggleClass(nightModeItems.gitHubIcon, nightModeItems.nighModeOnIcon)
        const userNameNightMode = toggleClass(nightModeItems.userNameSearch, nightModeItems.nightModeSearchBackground)
    })
}

export { nightMode }