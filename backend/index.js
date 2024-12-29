require("dotenv").config(); // Load environment variables

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");
const schema = require("./graphql/schema");

const app = express();

// Connect to MongoDB using environment variable
connectDB();

// Set up GraphQL endpoint
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);

// Start the server
app.listen(4000, () => {
	console.log(`Server running on ${process.env.PORT}`);
});
