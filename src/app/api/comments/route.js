import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

// GET All Comments of a Post
export const GET = async (req) => {
  const { searchParams } = new URL(req.url)
  const postSlug = searchParams.get('postSlug')

  try {
    const comments = await prisma.comments.findMany({
      where: {
        ...(postSlug && { slug: postSlug })
      },
      include: { user: true }
    })

    return NextResponse.json(comments, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
  }
}

// Create a Comment
export const POST = async (req) => {
  const { searchParams } = new URL(req.url)
  const postSlug = searchParams.get('postSlug')

  try {
    const comments = await prisma.comments.findMany({
      where: {
        ...(postSlug && { slug: postSlug })
      },
      include: { user: true }
    })

    return NextResponse.json(comments, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
  }
}
