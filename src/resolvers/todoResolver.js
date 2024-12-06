const Todo = require("../models/todo");
const TodoError = require("../errors/TodoError");

const resolvers = {
    Query: {
        todos: async () => {
            try {
                return await Todo.find();
            } catch (error) {
                throw new TodoError('Неуспешно извличане на задачите', 500);
            }
        },
        todo: async (_, { id }) => {
            try {
                const todo = await Todo.findById(id);
                if (!todo) {
                    throw new TodoError('Задачата не е намерена', 404);
                }
                return todo;
            } catch (error) {
                if (error instanceof TodoError) throw error;
                throw new TodoError('Неуспешно извличане на задачата', 500);
            }
        },
        todosByStatus: async (_, { status }) => {
            return await Todo.find({ completed: status });
        },
    },
    Mutation: {
        createTodo: async (_, args) => {
            try {
                return await Todo.create(args);
            } catch (error) {
                throw new TodoError('Неуспешно създаване на задача', 500);
            }
        },
        updateTodo: async (_, { id, ...args }) => {
            console.log(args);
            try {
                const updatedTodo = await Todo.findByIdAndUpdate(
                    id,
                    { ...args, updatedAt: new Date().toISOString() },
                    { new: true, runValidators: true }
                );
                console.log(updatedTodo);
                if (!updatedTodo) {
                    throw new TodoError('Задачата не е намерена', 404);
                }
                
                return updatedTodo;
            } catch (error) {
                if (error instanceof TodoError) throw error;
                throw new TodoError('Неуспешно обновяване на задачата', 500);
            }
        },
        deleteAll: async () => {
            try {
                await Todo.deleteMany();
                return true;
            } catch (error) {
                throw new TodoError('Неуспешно изтриване на всички задачи', 500);
            }
        },
        deleteTodo: async (_, { id }) => {
            try {
                const deletedTodo = await Todo.findByIdAndDelete(id);
                if (!deletedTodo) {
                    throw new TodoError('Задачата не е намерена', 404);
                }
                return deletedTodo;
            } catch (error) {
                if (error instanceof TodoError) throw error;
                throw new TodoError('Неуспешно изтриване на задачата', 500);
            }
        },
    },
};

module.exports = resolvers;
