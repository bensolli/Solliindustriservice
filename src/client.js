import { createClient } from "@sanity/client";



export default createClient({
    projectId: "opz08me3",
    dataset: "production",
    apiVersion: '2021-08-31', // use a UTC date string
    token: '', // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
})

