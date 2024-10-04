'use client'
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
export const Providers = ({ children }: { children: React.ReactNode }) => {
    const client = new ApolloClient({
        uri: "https://books-order.vercel.app/api/graphql",
        cache: new InMemoryCache(),
    })
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}