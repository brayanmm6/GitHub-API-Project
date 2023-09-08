import { eventsTypesToFind } from "../variables.js"

const userEvents = {
    events: [],
    setEvents (allEvents) {
        allEvents.forEach(eventItem => {
            const eventTypeVerify = eventsTypesToFind.find( type => type === eventItem.type)
            switch (eventTypeVerify) {
                case "PushEvent":
                case "CreateEvent":
                    let eventFilter = {eventType: eventItem.type, repoName: eventItem.repo.name, commits: ""}
                    let commitmessage = eventItem.payload.commits
                    if(commitmessage.length > 0){
                        commitmessage.forEach(commitItem => {
                        commitmessage = commitItem.message
                    })
                    }else{
                    commitmessage = "Commit sem menssagem!"
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