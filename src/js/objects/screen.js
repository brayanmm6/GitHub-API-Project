const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(userData){
        if(userData == false){
            this.userProfile.innerHTML = `  <div class="info error-message">
                                                <h1>Usuário não encontrado!</h1>
                                            </div>`
        }else{
            this.userProfile.innerHTML = `  <div class="info">
                                                <img src=${userData.avatar} alt="foto de perfil do usuário.">   
                                                <div class="data">
                                                    <h1>${userData.name ?? "Não possui nome cadastrado!"}</h1>
                                                    <a href="${userData.profileUrl}" target="_blank" class="profile-link">${userData.userName}</a>
                                                    <p>${userData.bio ?? "Não possui bio no perfil do usuário!"}</p>

                                                    <footer class="followers-and-following">
                                                        <p class="followers">Seguidores: ${userData.followers} </p>
                                                        <p class="following">Seguindo: ${userData.following}</p>
                                                    </footer>
                                                </div>
                                            </div>`
        }
    },

    userRepositories: document.querySelector(".profile-data"),
    renderRepositories(repositoriesData){
        if(repositoriesData.length == 0){
            this.userRepositories.innerHTML += `<div class="repositories">
                                                    <h3>O Usuário não possui nenhum repositório público.</h3>
                                                </div>`
            return
        }
        let repositorieItens = ""
        repositoriesData.forEach(repositorie => {
            repositorieItens += `<li><a href="${repositorie.html_url}" target="_blank">${repositorie.name}</a></li>`
            
        })
        this.userRepositories.innerHTML += `<div class="repositories">
                                                <h2>Repositórios</h2>
                                                <ul>${repositorieItens}</ul> 
                                            </div>`
    },

    userEvents: document.querySelector(".profile-data"),
    renderEvents(eventsData){
        if(eventsData === false) return
        let events = ""
        eventsData.forEach(eachEvent => {
            events += `<li><h4>${eachEvent.eventName}</h4> ~ <span class="last-event">${eachEvent.commits[0].message}</span></li>` 
        })
        this.userEvents.innerHTML += `  <div class="user-events">
                                            <h2>Eventos</h2>
                                            <ul class="user-events-items">
                                                ${events}
                                            </ul>
                                        </div>`
    }
} 

export { screen }