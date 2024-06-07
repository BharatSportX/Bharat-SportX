const mongoose=require('mongoose')
const connectDB=async()=>{
try {
    const dbURL=process.env.MONGO_DB_URL;
    if (!dbURL) {
        throw new Error ("MongoDB Connection URL is not defined");
    }
    await mongoose.connect(dbURL,{

    })
    console.log("Connected to MongoDb");
} catch (error) {
    console.log("Error Connecting to MongoDB",error.message)
}
}
module.exports=connectDB