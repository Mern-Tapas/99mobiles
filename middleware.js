import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    //      `withAuth` augments your `Request` with the user's token.
    function middleware(req) {


        if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admin") {
            console.log("log1")
            return new NextResponse("you are not authorised")
        } else {

        }

        
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                console.log(token)
                return token
            },

        }
    }
)



export const config = { matcher: ['/admin/:path*', '/user/:path*'] }  