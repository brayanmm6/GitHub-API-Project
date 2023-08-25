const userEvents = {
    events: [],

    setEvents (allEvents) {
        allEvents.forEach(eventItem => {
            if(eventItem.type === "CreateEvent" || eventItem.type === "PushEvent"){
                const eventFilter = {eventType: eventItem.type, eventName: eventItem.repo.name, commits: eventItem.payload.commits}
                this.events.push(eventFilter)
            }else{
                this.events = false
            }
        })
    },
    
    clearEvents(){
        this.events = []
    }
    
}



export { userEvents }