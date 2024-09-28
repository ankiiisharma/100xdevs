import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createPostInput, updatePostInput } from '@ankiiisharma/blog';


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: {
        userId: string
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const header = c.req.header('authorization') || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : header;

    try {
        const user = await verify(token, c.env.JWT_SECRET);
        console.log("Verified User:", user);
        if (user && user.id) {
            //@ts-ignore
            c.set('userId', user.id);
            await next();
        } else {
            c.status(401);
            return c.json({ message: 'UNAUTHORIZED' });
        }
    } catch (error) {
        c.status(401);
        return c.json({ message: 'Invalid token', error: error.message });
    }
});


blogRouter.post('/', async (c) => {

    try {
        const body = await c.req.json();

        const { success } = createPostInput.safeParse(body);
        if (!success) {
            c.status(401);
            return c.json({
                message: "error in inputs!",
            })
        }

        const authorId = c.get('userId');
        console.log(authorId);

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate())


        if (!authorId) {
            c.status(400);
            return c.json({ message: 'Author ID is missing' });
        }

        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId,
            },
        });

        return c.json({ id: post.id });
    } catch (error) {
        c.status(500);
        //@ts-ignore
        return c.json({ message: 'Failed to create post', error: error.message });
    }
});

blogRouter.put('/', async (c) => {
    const body = await c.req.json();

    const { success } = updatePostInput.safeParse(body);
    if (!success) {
        c.status(401);
        return c.json({
            message: "error in inputs!",
        })
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    const post = await prisma.post.update({
        where: {
            id: body.id,
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })
    return c.json({
        id: post.id
    })
})


//pagination add
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const posts = await prisma.post.findMany({
            select: {
                title: true,
                content: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });

        return c.json({
            posts
        })

        console.log(posts)

    } catch (error) {
        console.error('Error fetching posts:', error);
        return c.json({ error: 'Internal Server Error' }, 500);
    }
})


blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const post = await prisma.post.findFirst({
            where: {
                id: id,
            },
            select: {
                title: true,
                content: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })

        return c.json({
            post
        })
    } catch (e) {
        c.status(401);
        console.log(e);
    }
})

