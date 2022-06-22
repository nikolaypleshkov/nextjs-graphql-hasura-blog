import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "https://fine-wasp-91.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET!
    },
    cache: new InMemoryCache()
});

export default apolloClient;