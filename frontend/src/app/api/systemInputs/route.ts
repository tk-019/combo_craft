// src/api/basicInputs/route.ts
import { NextResponse } from 'next/server'
import { SystemInput } from '@/models/system-input'

const systemInputs: SystemInput[] = [
  {
    id: 1,
    input_sequence: '1',
    description: 'Jump',
  },
  {
    id: 2,
    input_sequence: '2',
    description: 'Crouch',
  },
  {
    id: 3,
    input_sequence: '3',
    description: 'Stand',
  },
  {
    id: 4,
    input_sequence: '4',
    description: 'Back',
  },
  {
    id: 5,
    input_sequence: '5',
    description: 'Neutral',
  },
  {
    id: 6,
    input_sequence: '6',
    description: 'Forward',
  },
  {
    id: 7,
    input_sequence: '7',
    description: 'Back Jump',
  },
  {
    id: 8,
    input_sequence: '8',
    description: 'Neutral Jump',
  },
  {
    id: 9,
    input_sequence: '9',
    description: 'Forward Jump',
  },
  {
    id: 10,
    input_sequence: 'MP+MK',
    description: 'Parry',
  },
  {
    id: 11,
    input_sequence: '44',
    description: 'Backstep',
  },
  {
    id: 12,
    input_sequence: 'HP+HK',
    description: 'Drive Impact',
  },
  {
    id: 13,
    input_sequence: '66',
    description: 'Dash',
  },
]

export async function GET() {
  return NextResponse.json(systemInputs)
}
