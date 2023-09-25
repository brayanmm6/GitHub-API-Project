const user = {
    avatar: "",
    name: "",
    bio: "",
    userName: "",
    followers: "",
    following: "",
    profileUrl: "",
    repositories: [],
    setInfo(gitHubUser){
        this.avatar = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.profileUrl = gitHubUser.html_url
    },

    setRepositories(repositories){
        this.repositories = repositories
    },
}

export {user}