import { withAuth } from "next-auth/middleware"
import { NextRequest, NextResponse } from "next/server"

export default withAuth(
    //      `withAuth` augments your `Request` with the user's token.
    function middleware(req) {


        if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admin") {
            return new NextResponse("you are not authorised")
        } 
        if (req.nextUrl.pathname.startsWith("/user") && req.nextauth.token?.role !== "user") {
            return new NextResponse("you are not authorised")
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



export const config = { matcher: ['/admin/:path*', '/user/:path*'] }  