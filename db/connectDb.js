import mongoose from "mongoose";

const connectDb = async(DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: 'school'
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log('Database conncted successfully!!!');
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "status": "failed",
            "message": "Database aren't connected!!"
        });
    }
};


export default connectDb;