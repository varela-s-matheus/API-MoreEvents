import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.connect(`mongodb+srv://${DATABASE_ACESS}@moreevents.3izlpjw.mongodb.net/MoreEvents`);

// anyOne:MoreEvents1234

let db = mongoose.connection;

export default db;