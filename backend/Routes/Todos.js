import { Router } from "express";
import { TodosCollection } from "../DB/databaseSchemas.js";

export const todoRoute = Router();

todoRoute.get("/getAllTodos", async (req, res) => {
    try {
        const todos = await TodosCollection.find({});
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Error fetching todos", error });
    }
});

todoRoute.post("/createTodo", async (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        res.status(400).json({
            message: "Title and Description are required.",
        });
    }
    try {
        const newTodo = await TodosCollection.create({
            title,
            description,
        });
        res.status(201).json({
            message: "Todo created successfully",
            todo: newTodo,
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating todo", error });
    }
});
