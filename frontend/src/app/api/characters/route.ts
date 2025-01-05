import { NextResponse } from 'next/server'
import { Character } from '@/models/character'

const characters: Character[] = [
  {
    id: 1,
    name: 'Ryu',
    description: 'The main character of the Street Fighter series.',
    created_at: new Date(),
  },
]

export async function GET() {
  return NextResponse.json(characters)
}
