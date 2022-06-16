import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "https://fine-wasp-91.hasura.app/v1/graphql",
    headers: {
        "x-hasura-admin-secret": "Z0GnHTKZR2w3YFWreBuSpTc8wb9m66I00xRlaO9UZiMeFvsV8ehx53jb14AWo3aB"
    },
    cache: new InMemoryCache()
});

export default apolloClient;