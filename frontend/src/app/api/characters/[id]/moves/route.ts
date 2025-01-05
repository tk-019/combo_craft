import { NextResponse } from 'next/server'

// モックデータ（加工前）
const moves = [
  {
    id: 1,
    character_id: 1, // Ryu
    name: 'Hadouken',
    type: 'Special',
    damage: 100,
    meter_gain: 20,
    description: 'A powerful fireball.',
    moveInputs: [
      { id: 1, input_sequence: '↓', description: 'Down', sequence_order: 1 },
      {
        id: 2,
        input_sequence: '↘',
        description: 'Down-Right',
        sequence_order: 2,
      },
      { id: 3, input_sequence: '→', description: 'Right', sequence_order: 3 },
      { id: 4, input_sequence: 'P', description: 'Punch', sequence_order: 4 },
    ],
  },
  {
    id: 2,
    character_id: 1, // Ryu
    name: 'Shoryuken',
    type: 'Special',
    damage: 120,
    meter_gain: 25,
    description: 'A rising uppercut.',
    moveInputs: [
      { id: 3, input_sequence: '→', description: 'Right', sequence_order: 1 },
      { id: 1, input_sequence: '↓', description: 'Down', sequence_order: 2 },
      {
        id: 2,
        input_sequence: '↘',
        description: 'Down-Right',
        sequence_order: 3,
      },
      { id: 4, input_sequence: 'P', description: 'Punch', sequence_order: 4 },
    ],
  },
]

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params // 非同期的に `params` を解決
  const characterId = Number(id)

  const characterMoves = moves.filter(
    (move) => move.character_id === characterId
  )

  if (characterMoves.length === 0) {
    return NextResponse.json(
      { error: 'No moves found for this character' },
      { status: 404 }
    )
  }

  return NextResponse.json(characterMoves)
}
