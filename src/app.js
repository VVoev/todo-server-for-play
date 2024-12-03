const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

const typeDefs = require("./schema/todoSchema");
const resolvers = require("./resolvers/todoResolver");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Server is running");
});
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

const user = process.env.MONGO_USER
const password = process.env.MONGO_PASSWORD

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app, path: "/graphql" });

    await mongoose.connect(`mongodb+srv://${user}:${password}@democluster.f3hev.mongodb.net/?retryWrites=true&w=majority&appName=DemoCluster`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();
