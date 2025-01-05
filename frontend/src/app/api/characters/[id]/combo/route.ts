import { NextResponse } from 'next/server'
import { Character } from '@/models/character'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)

  return NextResponse.json(null)
}
