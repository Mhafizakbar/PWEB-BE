import { MiddlewareHandler } from 'hono'
import { verify } from 'jsonwebtoken'
import { getCookie } from 'hono/cookie'

const USER_SECRET = 'RAHASIA_USER'
const ADMIN_SECRET = 'RAHASIA_ADMIN'

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  
  const token = getCookie(c, 'token')

  if (!token) {
    return c.json({ error: 'Token tidak ditemukan' }, 401)
  }

  try {
    let decoded: any
    try {
      decoded = verify(token, ADMIN_SECRET)
    } catch {
      decoded = verify(token, USER_SECRET)
    }

    if (!decoded || !decoded.role || !decoded.id || !decoded.email) {
      return c.json({ error: 'Token tidak valid' }, 403)
    }

    c.set('user', {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    })

    await next()
  } catch (err) {
    return c.json({ error: 'Token tidak valid' }, 403)
  }
}

export default authMiddleware
