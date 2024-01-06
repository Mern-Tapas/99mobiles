import mongoose from "mongoose"

let isConnected:boolean

export default async function connectToDb() {
    if (isConnected) {
        console.log("database is already connected")
    } else {
        await mongoose.connect("mongodb+srv://cyb8964803609:yamahavb5850@cluster0.ug8kohh.mongodb.net/?retryWrites=true&w=majority").then(() => {
            console.log('database is connected Successfull')
            isConnected = true
        }).catch((error) => {
            console.log("database is not connected")
            console.log(error)
        })     
    }
}

