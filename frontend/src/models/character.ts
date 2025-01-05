// Table characters {
//   id INTEGER [pk]
//   name VARCHAR(255) [not null]
//   description TEXT
//   created_at DATETIME [default: `now`]
// }
export interface Character {
  id: number
  name: string
  description?: string
  created_at: Date
}
