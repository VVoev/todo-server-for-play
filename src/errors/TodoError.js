class TodoError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = 'TodoError';
    }
}

module.exports = TodoError;