import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

export const GET = async (req) => {
  const { searchParams } = new URL(req.url)

  const page = parseInt(searchParams.get('page') || '1', 10) // Default to 1 if page is not provided

  const POST_PER_PAGE = 2

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1)
  }

  try {
    const [posts, count] = await prisma.$transaction([prisma.post.findMany(query), prisma.post.count()])
    console.log('posts')
    console.log(posts)

    return NextResponse.json({ posts, count }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
  }
}
