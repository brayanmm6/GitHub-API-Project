import { baseUrl, eventsQuantity } from "../variables.js";

async function getEvents (userName) {
    const url = `${baseUrl}/${userName}/events?per_page=${eventsQuantity}`
    const response = await fetch(url)
    return response.json()
}

export { getEvents }