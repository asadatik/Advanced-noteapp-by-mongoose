export interface INotes {
    title: string,
    content: string,
    category: "personal" | "work" | "study" | "other",
    pinned: boolean,
    tags: {
        label: string,
        color: string
    }
} 