import mongoose from "mongoose";

mongoose.connect("mongodb+srv://anyOne:MoreEvents1234@moreevents.3izlpjw.mongodb.net/MoreEvents");

let db = mongoose.connection;

export default db;