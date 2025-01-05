// Table combo_updates {
//   id INTEGER [pk]
//   combo_id INTEGER [ref: > combos.id]
//   previous_damage INTEGER
//   previous_meter_used INTEGER
//   previous_meter_gain INTEGER
//   updated_at DATETIME [default: `now`]
// }
export interface ComboUpdate {
  id: number
  combo_id: number
  previous_damage: number
  previous_meter_used: number
  previous_meter_gain: number
  updated_at: Date
}
