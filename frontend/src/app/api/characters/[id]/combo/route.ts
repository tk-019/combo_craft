import { NextResponse } from 'next/server'
import { Character } from '@/Types/Character'

const characters: Character[] = [
  {
    id: 1,
    name: 'Ryu',
    imageUrl: '/images/ryu.webp',
    health: 1000,
    walkSpeed: {
      forward: 5.5,
      backward: 4.5,
    },
    commands: [
      {
        name: 'Hadouken',
        input: '↓↘→ + P',
        damage: 100,
        gaugeUsed: 0,
        gaugeGain: 20,
        difficulty: 'Easy',
      },
      {
        name: 'Shoryuken',
        input: '→↓↘ + P',
        damage: 120,
        gaugeUsed: 0,
        gaugeGain: 25,
        difficulty: 'Medium',
      },
    ],
  },
]

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id)
  const character = characters.find((char) => char.id === id)

  if (!character) {
    return NextResponse.json({ error: 'Character not found' }, { status: 404 })
  }

  return NextResponse.json(character.commands)
}
