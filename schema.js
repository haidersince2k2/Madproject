const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");

const typeDefs = gql`
  type University {
    name: String
    depts: [Dept]
  }
  
  type Dept {
    name: String
    degrees: [Degree]
  }
  
  type Degree {
    name: String
    numberOfStudents: Int
  }
  
  type Query {
    csNumberOfStudents: Int
  }
`;

const university = {
  name: "ABC University",
  depts: [
    {
      name: "Computer Science",
      degrees: [
        { name: "Bachelor of Science in Computer Science", numberOfStudents: 100 },
        { name: "Master of Science in Computer Science", numberOfStudents: 50 },
      ],
    },
    // Add more departments and degrees if needed
  ],
};

const resolvers = {
  Query: {
    csNumberOfStudents: () => {
      const csDept = university.depts.find((dept) => dept.name === "Computer Science");
      if (csDept) {
        return csDept.degrees.reduce((total, degree) => total + degree.numberOfStudents, 0);
      }
      return 0;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
});
