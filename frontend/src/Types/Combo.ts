export interface Combo {
  name: string
  input: string
  damage: number
  gaugeUsed: number
  gaugeGain: number
  difficulty: string
}
export interface ComboInput {
  combo_id: number
  basic_input_id: number
  sequence_order: number
}

export interface ComboMove {
  combo_id: number
  move_id: number
  sequence_order: number
}
