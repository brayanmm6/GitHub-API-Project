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
                                                    <p>${userData.bio ?? "Não possui bio no perfil do usuário!"}</p>
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
    }
} 

export { screen }