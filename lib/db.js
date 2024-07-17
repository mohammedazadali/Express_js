import mongoose from "mongoose";


const connectdb =async () =>{
    try{
        await mongoose.connect('mongodb://localhost:27017')
        console.log('connected to db')
    }
    catch(err){
        console.log(err)
    }
}


export default connectdb