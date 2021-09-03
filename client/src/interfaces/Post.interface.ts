export interface Post {
    title: string
    body?: string
    date?: string
    id?: string
}

export interface CreatePostErrors {
    title: string | undefined
    body: string | undefined
}