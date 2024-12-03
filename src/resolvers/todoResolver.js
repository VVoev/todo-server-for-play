const Todo = require("../models/todo");

const resolvers = {
    Query: {
        todos: async () => await Todo.find(),
        todo: async (_, { id }) => await Todo.findById(id),
    },
    Mutation: {
        createTodo: async (_, args) => await Todo.create(args),
        updateTodo: async (_, { id, ...args }) => {
            await Todo.findByIdAndUpdate(id, args, { new: true });
            return await Todo.findById(id);
        },
        deleteAll: async () => await Todo.deleteMany(),
        deleteTodo: async (_, { id }) => await Todo.findByIdAndDelete(id),
    },
};

module.exports = resolvers;
