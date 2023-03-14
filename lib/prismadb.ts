import { PrismaClient } from '@prisma/client'

const client = global.prismadb || new PrismaClient()
if(process.env.NODE_ENV === 'production') global.prismadb = client
// reason = next js hot reloading (every code change our code update and reruns ). 
//in Prisma it creates bunch of this new prisma client instances
// global file not affected with hot realoading
export default client