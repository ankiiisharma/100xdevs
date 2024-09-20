import z from "zod";

export const signupInput = z.object({
    username: z.string(),
    password: z.string().min(6),
    name: z.string(),
    email: z.string().email()
})


export const signinInput = z.object({
    username: z.string(),
    password: z.string().min(6),
})


export const createPostInput = z.object({
    title: z.string(),
    content: z.string(),
})


export const updatePostInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})


export type updatePostInput = z.infer<typeof updatePostInput>
export type SignupInput = z.infer<typeof signupInput>
export type CreatePostInput = z.infer<typeof createPostInput>
export type SigninInput = z.infer<typeof signinInput>