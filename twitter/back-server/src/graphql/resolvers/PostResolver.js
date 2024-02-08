const { Post } = require("../../models/Post.js");

const resolvers = {
    Query: {
        getPosts: async (parent, args) => {
            try {
                const posts = await Post.find().sort();
                return posts;
            } catch (error) {
                throw new Error(`${error.message}`);
            }
        },
    },
    Mutation: {
        createPost: async (parent, args) => {
            try {
                if (!args.title || !args.content) throw new Error('Some fields are required');
                
                const post = new Post({ title: args.title, content: args.content, date: new Date() });
                await post.save();
                return post;
            } catch (error) {
                throw new Error(`${error.message}`);
            }
        },
    },
};

module.exports = resolvers;
