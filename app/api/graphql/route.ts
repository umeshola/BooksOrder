import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from 'next/server';
import { prisma } from '../../../prisma/db';
import { typeDefs } from '../../../graphql/schema';
import { resolvers } from "../../../graphql/resolver";
// Define the schema and resolvers
export type Context = {
    prisma: PrismaClient;
};

const apolloserver = new ApolloServer<Context>({
    typeDefs,
    resolvers,
});

const handler = startServerAndCreateNextHandler(apolloserver, {
    context: async () => ({ prisma }),
});

export async function POST(req: NextRequest) {
    return handler(req);
}

export async function GET(req: NextRequest) {
    return handler(req);
}
