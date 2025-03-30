import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const query = searchParams.get('query')

    if (!query) {
      return NextResponse.json({ message: 'Query parameter is required' }, { status: 400 })
    }

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/v1/books-search?keyword=${query}&format=js&maxResults=100`,
    )
    const books = response.data

    return NextResponse.json(books.data)
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch data', error }, { status: 500 })
  }
}
