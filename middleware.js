import { withAuth } from "next-auth/middleware"
import {  NextResponse } from "next/server"

export default withAuth(
    //      `withAuth` augments your `Request` with the user's token.
    function middleware(req) {


        if (req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role !== "admin") {
            // return new NextResponse("you are not authorised")
            const url = req.nextUrl.clone()
            if (url.pathname === '/admin') {
                url.pathname = '/user'
                return NextResponse.redirect(url)
            }
        }
        if (req.nextUrl.pathname.startsWith("/user") && req.nextauth.token?.role !== "user") {
            // return new NextResponse("you are not authorised")

            const url = req.nextUrl.clone()
            if (url.pathname === '/user') {
                url.pathname = '/admin'
                return NextResponse.redirect(url)
            }

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