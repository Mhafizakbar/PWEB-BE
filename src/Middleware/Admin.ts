import { MiddlewareHandler} from "hono";
import { getCookie } from "hono/cookie";
import * as jwt from "jsonwebtoken";

const Admin : MiddlewareHandler = async (c, next) => {
    const tokencookie = getCookie(c, "token")
    const secreet = "RAHASIA_USER"
    console.log(tokencookie)
    console.log(secreet)

    if (!tokencookie) {
        return c.json({ status: "error", message: "Token missing" }, 401)
    }

    if (!secreet) {
        console.error("SECRET_KEY missing in environment")
        return c.json({ status: "error", message: "Missing secret token" }, 500)
    }

    try {
        const decode = jwt.verify(tokencookie, secreet)
        c.set("user", decode)

        const role = c.get("user").role
        if (role !== "ADMIN") {
            return c.json({ status: "error", message: "Anda bukan admin" }, 401)
        }

        await next()
    } catch (e) {
        console.error("JWT verification error:", e)
        return c.json({ status: "error", message: "Invalid token" }, 401)
    }
}


export default Admin;