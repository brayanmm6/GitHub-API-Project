function checkInputContent (input) {
    if(input == false) alert("Por favor, preencha o campo de pesquisa antes!")
}

function checkRepositories (repositories){
    if(repositories.length === 0) return false // user.repositories is empty
}

export { checkInputContent, checkRepositories }