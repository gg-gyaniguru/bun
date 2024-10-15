import {ApolloServer} from "@apollo/server";

const apollo = new ApolloServer({
    typeDefs: `
        
        type Query {
            
        }
    `,
    resolvers: {
        Query: {}
    }
});

await apollo.start();

export default apollo;