const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: String,
        default: new Date().toISOString(),
    },
});

module.exports = mongoose.model("Todo", todoSchema);

