import {ApolloClient, InMemoryCache} from "@apollo/client";

const apollo = new ApolloClient({
    uri: '/api/apollo',
    cache: new InMemoryCache()
});

export default apollo;