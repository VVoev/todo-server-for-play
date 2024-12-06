const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        enum: ['LOW', 'MEDIUM', 'HIGH'],
        default: 'LOW',
    },
    description: String,
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: String,
        default: new Date().toISOString()
    },
    updatedAt: {
        type: String,
        default: null
    },
});

module.exports = mongoose.model("Todo", todoSchema);

