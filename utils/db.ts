import mongoose from "mongoose"

let isConnected: boolean

export default async function connectToDb() {
    if (isConnected) {
        console.log("database is already connected")
    } else {
        await mongoose.connect(process.env.DB || "").then(() => {
            console.log('database is connected Successfull')
            isConnected = true
        }).catch((error) => {
            console.log("database is not connected")
            console.log(error)
        })
    }
}

