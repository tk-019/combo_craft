// Table ratings {
//   id INTEGER [pk]
//   combo_id INTEGER [ref: > combos.id]
//   user_id INTEGER [ref: > users.id]
//   rating INTEGER [not null]
//   comment TEXT
//   created_at DATETIME [default: `now`]
// }
export interface Rating {
  id: number
  combo_id: number
  user_id: number
  rating: number
  comment: string
  created_at: Date
}
