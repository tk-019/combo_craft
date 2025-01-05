// Table combo_moves {
//   id INTEGER [pk]
//   combo_id INTEGER [ref: > combos.id]
//   move_id INTEGER [ref: > moves.id]
//   basic_input_id INTEGER [ref: > basic_inputs.id]
//   sequence_order INTEGER [not null]
//   charge_level INTEGER [default: 0]
// }
export interface ComboMove {
  id: number
  combo_id: number
  move_id: number
  basic_input_id: number
  sequence_order: number
  charge_level: number
}
