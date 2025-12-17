import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aman9060mishra_db_user:TefqL6Ta3uWayl2E@cluster0.lokj0a8.mongodb.net/?appName=Cluster0"
    );
    console.log("MONGO DB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.error("Mongo Err ", error);
    process.exit(1); //exit with failure
  }
};
