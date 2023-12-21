import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
    // Configure one or more authentication providers
    providers: [

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req, res) {
                // Add logic here to look up the user from the credentials supplied
                await connection()
                const { username, password } = credentials

                const user = await userModel.findOne({ username })

                if (user) {

                    if (user.username === username && user.password === password) {
                        return user
                    } else {
                        throw new Error("Invalid User Id or Password")
                    }

                } else {
                    throw new Error("you are not registerd")
                }

                // return user

            }
        })
        // ...add more providers here  
    ],
    callbacks: {
        async signIn({ user, account, profile, credentials }) {

            await connection()
            const { id, name, email, image } = user

            user = await userModel.findOne({ email })

            if (user) {

                return user

            } else {


                try {
                    const newUser = new userModel({ id, name, email, image, password: "password", usertype: "user" })
                    await newUser.save()
                    return true
                } catch (error) {

                }

            }

        },
        // async redirect({ url, baseUrl }) {
        //     return baseUrl
        // },
        // async session({ session, user, token }) {
        //     return session
        // },
        async jwt({ token, user, account, profile, isNewUser }) {
            await connection()
            const checkUser = await userModel.findOne({ email: token.email })

            if (checkUser?.usertype === "admin") {
                token.role = "admin"
                return token
            } else {

                token.role = "user"
                token.status = checkUser.status
                return token
            }

        }
    },
    pages: {
        signIn: '/login',

    }
}
export default NextAuth(authOptions)