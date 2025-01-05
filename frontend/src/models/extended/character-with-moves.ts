// characterを継承してmoveとのリレーションを定義
import { Character } from '@/models/character'
import { Move } from '@/models/move'
export interface CharacterWithMoves extends Character {
  moves: Move[]
}
