// Table users {
//   id INTEGER [pk]
//   username VARCHAR(255) [not null]
//   email VARCHAR(255) [unique, not null]
//   oauth_provider VARCHAR(255)
//   oauth_id VARCHAR(255) [unique]
//   created_at DATETIME [default: `now`]
// }
export interface User {
  id: number
  username: string
  email: string
  oauth_provider?: string
  oauth_id?: string
  created_at: Date
}
