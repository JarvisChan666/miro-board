import {v} from "convex/values"
import {defineSchema, defineTable} from "convex/server"

// https://docs.convex.dev/database/schemas
export default defineSchema ({
    boards: defineTable({
        title: v.string(),
        orgId: v.string(),
        authorId: v.string(),
        authorName: v.string(),
        imageUrl: v.string(),
    })
    .index("by_org", ["orgId"])
    .searchIndex("search_title", {
        searchField:"title",
        filterFields:["orgId"]
    })
})