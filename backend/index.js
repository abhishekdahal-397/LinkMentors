require("dotenv").config(); // Load environment variables

console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging line

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
const port = process.env.PORT || 5000; // Use process.env.PORT or default to 4000
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}/graphql`);
});
