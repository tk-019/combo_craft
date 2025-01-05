// Table moves {
//   id INTEGER [pk]
//   character_id INTEGER [ref: > characters.id]
//   name VARCHAR(255) [not null]
//   type VARCHAR(50) [not null]
//   input_sequence TEXT
//   damage INTEGER
//   is_rush BOOLEAN [default: false]
//   is_cancel BOOLEAN [default: false]
//   charge_time INTEGER [default: 0]
//   max_charge_level INTEGER [default: 0]
// }
export interface Move {
  id: number
  character_id: number
  name: string
  type: string
  input_sequence?: string
  damage?: number
  is_rush: boolean
  is_cancel: boolean
  charge_time: number
  max_charge_level: number
}
