export interface Combo {
  name: string
  input: string
  damage: number
  gaugeUsed: number
  gaugeGain: number
  difficulty: string
}

export interface Character {
  id: number
  name: string
  imageUrl: string
  health: number
  walkSpeed: {
    forward: number
    backward: number
  }
  commands: Combo[]
}
