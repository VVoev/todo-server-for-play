const { gql } = require("apollo-server");

const typeDefs = gql`

    enum Priority {
        LOW
        MEDIUM
        HIGH
    }

    type Todo {
        id: ID!
        priority: Priority!
        completed: Boolean!
        createdAt: String!
        updatedAt: String
        title: String!
        description: String
    }

    type Query {
        todos: [Todo!]!
        todo(id: ID!): Todo
        todosByStatus(status: Boolean!): [Todo!]!
    }

    type Mutation {
        createTodo(title: String!, description: String): Todo!
        updateTodo(id: ID!, title: String, description: String, completed: Boolean): Todo!
        deleteTodo(id: ID!): Todo!
        deleteAll: String!
    }
`;

module.exports = typeDefs;
