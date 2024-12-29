# LinkMentors

## Project Description
LinkMentors is a platform designed to connect students and teachers effectively. It facilitates seamless communication, resource sharing, and academic support between students and their mentors. The platform uses modern web technologies like GraphQL and Express.js to ensure scalability and reliability.

---

## Features
- **Student Management**: Store and manage student details, including personal information, class, and academic preferences.
- **Teacher Management**: Link students with teachers based on their preferences.
- **GraphQL API**: Efficient querying and mutation capabilities for all operations.
- **Scalable Backend**: Built using Node.js, Express.js, and MongoDB.

---

## Tech Stack

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **GraphQL**: API query language
- **Mongoose**: MongoDB ODM for database operations

### Database
- **MongoDB**: NoSQL database

---

## Installation

### Prerequisites
- **Node.js**: Ensure you have Node.js installed (v18.0 or higher).
- **MongoDB**: Set up a MongoDB instance locally or use a cloud provider like MongoDB Atlas.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/linkmentors.git
   cd linkmentors
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and configure the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Scripts

- **Start the server**:
  ```bash
  npm start
  ```
- **Development mode** (using Nodemon):
  ```bash
  npm run dev
  ```

---


## Usage
1. Query the GraphQL API at `http://localhost:5000/graphql`.
2. Use tools like [GraphQL Playground](https://github.com/graphql/graphql-playground) or [Apollo Studio](https://www.apollographql.com/studio) to test your queries and mutations.

---

## Example Queries

### Add a Student
```graphql
mutation {
  addStudent(input: {
    name: "John Doe",
    class: 10,
    age: 15,
    email: "john.doe@example.com",
    phone: 1234567890,
    teacherReq: "Mathematics"
  }) {
    id
    name
    class
    email
  }
}
```

### Get Students
```graphql
query {
  students {
    id
    name
    class
    email
  }
}
```

---

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a Pull Request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact
For any queries or support, reach out to abhishekdahal397@gmail.com

