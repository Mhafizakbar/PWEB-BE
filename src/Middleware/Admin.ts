import { MiddlewareHandler } from 'hono'

export const adminMiddleware: MiddlewareHandler = async (c, next) => {
  const user = c.get('user')
  if (!user || user.role !== 'ADMIN') {
    return c.json({ error: 'Akses hanya untuk admin' }, 403)
  }
  await next()
}
