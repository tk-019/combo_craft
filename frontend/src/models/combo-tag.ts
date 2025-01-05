// Table combo_tags {
//   id INTEGER [pk]
//   combo_id INTEGER [ref: > combos.id]
//   tag_id INTEGER [ref: > tags.id]
// }
export interface ComboTag {
  id: number
  combo_id: number
  tag_id: number
}
