// Table move_inputs {
//   id INTEGER [pk]
//   move_id INTEGER [ref: > moves.id]
//   basic_input_id INTEGER [ref: > basic_inputs.id]
//   sequence_order INTEGER [not null]
//   simultaneous BOOLEAN [default: false]
// }
export interface MoveInput {
  id: number
  move_id: number
  basic_input_id: number
  sequence_order: number
  simultaneous: boolean
}
