import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    //      `withAuth` augments your `Request` with the user's token.
    function middleware(req) {


        if (req.nextUrl.pathname.startsWith("/dashboard") && req.nextauth.token?.role !== "admin") {
            return new NextResponse("you are not authorised")
        } else {

        }
    },
    {
        callbacks: {
            authorized: ({ token }) => {
                return token
            },

        }
    }
)



export const config = { matcher: ['/dashboard/:path*', '/account/:path*'] }  