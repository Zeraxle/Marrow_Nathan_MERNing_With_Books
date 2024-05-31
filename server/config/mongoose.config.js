import {connect} from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI

export const dbConnect = async() => {
    try{
        connect(MONGODB_URI, {dbName: `Books`})
        console.log(`connected to the db`)
    }
    catch(error) {
        console.log(`connection failed:  Error --> ${error}` )
    }
}

