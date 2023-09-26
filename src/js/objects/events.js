import { eventsTypesToFind } from "../variables.js"

const userEvents = {
    events: [],
    async setEvents (eventsData) {
        const allEvents = await eventsData
        allEvents.forEach(eventItem => {
            const eventTypeVerify = eventsTypesToFind.find( type => type === eventItem.type)
            switch (eventTypeVerify) {
                case "PushEvent":
                case "CreateEvent":
                    let eventFilter = {eventType: eventItem.type, repoName: eventItem.repo.name, commits: ""}
                    let commitmessage = eventItem.payload.commits
                    if(commitmessage){
                        if(commitmessage.length > 0){
                            commitmessage.forEach(commitItem => {
                            commitmessage = commitItem.message
                        })
                        }else{
                        commitmessage = "Commit sem menssagem!"
                        }
                    }else if(commitmessage === undefined){
                        commitmessage = "Sem commit!"
                    }
                    eventFilter.commits = commitmessage
                    this.events.push(eventFilter)
                    break
            }  
        })
        
        if(this.events.length === 0 ) this.events = false
    },
    
    clearEvents(){
        this.events = []
    }
}

export { userEvents }