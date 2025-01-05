import { NextResponse } from 'next/server'

type ComboInput = {
  combo_id: number
  basic_input_id: number
  sequence_order: number
}

type ComboMove = {
  combo_id: number
  move_id: number
  sequence_order: number
}

let comboInputs: ComboInput[] = []
let comboMoves: ComboMove[] = []

export async function POST(
  request: Request,
  context: { params: { id: string } }
) {
  const characterId = Number(context.params.id)
  const { name, inputs, moves, damage, difficulty } = await request.json()

  const comboId = comboInputs.length + 1

  const newComboInputs = inputs.map((inputId: number, index: number) => ({
    combo_id: comboId,
    basic_input_id: inputId,
    sequence_order: index + 1,
  }))

  const newComboMoves = moves.map((moveId: number, index: number) => ({
    combo_id: comboId,
    move_id: moveId,
    sequence_order: inputs.length + index + 1,
  }))

  comboInputs = [...comboInputs, ...newComboInputs]
  comboMoves = [...comboMoves, ...newComboMoves]

  return NextResponse.json({
    message: 'Combo registered successfully',
    comboId,
  })
}
