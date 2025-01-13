import { createContext } from 'react'
import { Character } from '@/models/character'

// Contextの作成
export const CharacterContext = createContext<Character[]>([])

// Providerの型
interface CharacterProviderProps {
  children: React.ReactNode
  initialCharacters: Character[]
}

// Providerコンポーネント
export function CharacterProvider({
  children,
  initialCharacters,
}: CharacterProviderProps) {
  return (
    <CharacterContext.Provider value={initialCharacters}>
      {children}
    </CharacterContext.Provider>
  )
}
