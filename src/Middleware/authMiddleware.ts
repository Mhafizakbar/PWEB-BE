import { MiddlewareHandler } from 'hono'
import { verify } from 'jsonwebtoken'

const SECRET_KEY = 'RAHASIA_KAMU'

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  const authHeader = c.req.header('Authorization')
  if (!authHeader) {
    return c.json({ error: 'Token tidak ditemukan' }, 401)
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = verify(token, SECRET_KEY) as {
      id: number
      email: string
      role: string
    }
    c.set('user', decoded)
    await next()
  } catch (err) {
    return c.json({ error: 'Token tidak valid' }, 403)
  }
}

export default authMiddleware
