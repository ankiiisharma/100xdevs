import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'email', type: 'text', placeholder: 'mail@mail.com' },
                password: { label: 'password', type: 'password', placeholder: 'password' }
            },
            async authorize(credentials: any) {
                console.log(credentials)
                return {
                    id: "user11",
                    username: "ankit",
                    password: "sihid"
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export const GET = handler;