// Table combo_inputs {
//   id INTEGER [pk]
//   combo_id INTEGER [ref: > combos.id]
//   basic_input_id INTEGER [ref: > basic_inputs.id]
//   sequence_order INTEGER [not null]
// }
export interface ComboInput {
  id: number
  combo_id: number
  basic_input_id: number
  sequence_order: number
}
