const user = {
    avatar: "",
    name: "",
    bio: "",
    userName: "",
    repositories: [],
    setInfo(gitHubUser){
        this.avatar = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },

    setRepositories(repositories){
        this.repositories = repositories
    }
}

export {user}