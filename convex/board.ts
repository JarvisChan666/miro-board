import {v} from "convex/values"

import {mutation} from "./_generated/server"

const images = [
"/placeholders/logo.svg",
"/placeholders/logo2.svg",
]
export const create = mutation({
    args: {
        orgId: v.string(),
        title: v .string(),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();

        if (!identity) {
            throw new Error("Unauthorized");
        }
        const randomImage = images[Math.floor(Math.random() * images.length)]

        const board = await ctx.db.insert("boards", {
            title: args.title,
            orgId: args.orgId,
            authorId: identity.subject,
            authorName: identity.name!,
            imageUrl: "/placeholders/1.svg",
        });

        return board;
    }
})