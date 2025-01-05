// src/api/basicInputs/route.ts
import { NextResponse } from 'next/server'

const basicInputs = [
  { id: 1, input_sequence: '↓', description: 'Down' },
  { id: 2, input_sequence: '→', description: 'Right' },
  { id: 3, input_sequence: '←', description: 'Left' },
  { id: 4, input_sequence: '↑', description: 'Up' },
  { id: 5, input_sequence: '↘', description: 'Down-Right' },
  { id: 6, input_sequence: '↙', description: 'Down-Left' },
  { id: 7, input_sequence: '↖', description: 'Up-Left' },
  { id: 8, input_sequence: '↗', description: 'Up-Right' },
  { id: 9, input_sequence: 'N', description: 'Neutral' },
  { id: 10, input_sequence: 'LP', description: 'Light Punch' },
  { id: 11, input_sequence: 'MP', description: 'Medium Punch' },
  { id: 12, input_sequence: 'HP', description: 'Heavy Punch' },
  { id: 13, input_sequence: 'LK', description: 'Light Kick' },
  { id: 14, input_sequence: 'MK', description: 'Medium Kick' },
  { id: 15, input_sequence: 'HK', description: 'Heavy Kick' },
  { id: 16, input_sequence: 'MP+MK →→', description: 'Drive Rush' },
  { id: 17, input_sequence: '→→', description: 'Dash' },
  { id: 18, input_sequence: 'LP+LK', description: 'Drive Impact' },
]

export async function GET() {
  return NextResponse.json(basicInputs)
}
