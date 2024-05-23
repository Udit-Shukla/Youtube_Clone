import mongoose from 'mongoose';
let alreadyOne = false;

export async function dbConnect(){
    if(alreadyOne){
        return ;
    }
    alreadyOne = true;
    await mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true, });
}