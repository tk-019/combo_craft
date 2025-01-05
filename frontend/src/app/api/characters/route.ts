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

export async function GET() {
  return NextResponse.json(characters)
}
