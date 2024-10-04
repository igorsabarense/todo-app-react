import mongoose from "mongoose";

const MONGO_DB_URL = process.env.MONGO_DB_URL;

async function connectToDatabase() {
    try {
        await mongoose.connect(MONGO_DB_URL);
        console.log("Connected to the Database");
    } catch (error) {
        console.error(`Error connecting to the database: ${error}`);
    }
}
connectToDatabase();

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const TodosCollection = mongoose.model("Todos", todoSchema);

export { TodosCollection };
