
import withAuth from "next-auth/middleware";

export const config = { matcher: ["/api/protected/:path*", "/protected/:path*", "/user/:path*", "/admin/"] };

export default withAuth({
    callbacks: {
        authorized({ req, token }) {
            console.log(req.nextUrl.pathname)
            // `/admin` requires admin role
            if (req.nextUrl.pathname.startsWith("/admin") || req.nextUrl.pathname.startsWith("/api/protected/admin")) {
                console.log(token)
                return token?.role === "admin"
            }

            // `/me` only requires the user to be logged in
            return !!token
        },
    },
})