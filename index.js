const { GraphQLServer } = require('graphql-yoga');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const People = require('./database')


const typeDefs = `
type Query {
	People: [PeopleObject]!
	Greeting: String
}
type PeopleObject {
	id: ID
    first: String!
    last: String!
}
type Mutation {
	createPerson(first: String!, last: String!): PeopleObject
	deletePerson(id: ID!): PeopleObject
}
`
const resolvers = {
  Query,
  Mutation

}
const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start({port: 7777}, () => console.log(`The server is running on http://localhost:7777`))