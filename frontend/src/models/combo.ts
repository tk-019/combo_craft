// Table combos {
//   id INTEGER [pk]
//   character_id INTEGER [ref: > characters.id]
//   user_id INTEGER [ref: > users.id]
//   name VARCHAR(255) [not null]
//   damage INTEGER
//   meter_used INTEGER
//   meter_gain INTEGER
//   difficulty VARCHAR(50)
//   created_at DATETIME [default: `now`]
// }
export interface Combo {
  id: number
  character_id: number
  user_id: number
  name: string
  damage: number
  meter_used: number
  meter_gain: number
  difficulty: string
  created_at: Date
}
