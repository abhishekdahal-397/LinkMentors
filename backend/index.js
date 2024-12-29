const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
require("dotenv").config();
const schema = require("./graphql/schema");

const app = express();

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log(err));

// GraphQL endpoint
app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true, // Set to false in production
	})
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
