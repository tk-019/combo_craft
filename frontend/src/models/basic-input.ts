// Table basic_inputs {
//   id INTEGER [pk]
//   input_sequence VARCHAR(255) [not null]
//   description VARCHAR(255)
// }
export interface BasicInput {
  id: number
  input_sequence: string
  description?: string
}
