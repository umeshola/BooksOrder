import { Context } from '../app/api/graphql/route';
export const resolvers = {
    Query: {
        novels: async (parent: any, args: any, context: Context) => {
            return await context.prisma.novel.findMany({
                include: {
                    author: true,
                }
            }
            );
        },
        novel: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.novel.findUnique({
                where: {
                    id: args.id,
                },
                include: {
                    author: true,
                }
            });
        },
    },
    Mutation: {
        addNovel: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.novel.create({
                data: {
                    title: args.title,
                    image: args.image,
                },
            });
        },
        updateNovel: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.novel.update({
                where: {
                    id: args.id,
                },
                data: {
                    title: args.title,
                    image: args.image,
                },
            });
        },

        deleteNovel: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.novel.delete({
                where: {
                    id: args.id,
                },
            });
        },
        addAuthor: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.author.create({
                data: {
                    novelId: args.novelId,
                    name: args.name,
                },
            });
        },
        deleteAuthor: async (_parent: any, args: any, context: Context) => {
            return await context.prisma.author.delete({
                where: {
                    id: args.id,
                },
            });
        },
    },
};
