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
      `${process.env.NEXT_PUBLIC_API_ALADIN_URL}${process.env.NEXT_PUBLIC_API_ALADIN_KEY}&Query=${query}&MaxResults=100`,
    )

    return NextResponse.json(response.data)
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch data', error }, { status: 500 })
  }
}
