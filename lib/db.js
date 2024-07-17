import mongoose from "mongoose";
import dontenv from 'dotenv'

dontenv.config() //to config the dotenv

const connectdb =async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('connected to db')
    }
    catch(err){
        console.error(err.message)
    }
}


export default connectdb