const { gql } = require("apollo-server");

const typeDefs = gql`
    type Todo {
        id: ID!
        title: String!
        description: String
        completed: Boolean
        createdAt: String
    }

    type Query {
        todos: [Todo!]!
        todo(id: ID!): Todo
    }

    type Mutation {
        createTodo(title: String!, description: String): Todo!
        updateTodo(id: ID!, title: String, description: String, completed: Boolean): Todo!
        deleteTodo(id: ID!): Todo!
        deleteAll: String!
    }
`;

module.exports = typeDefs;
