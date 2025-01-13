import { useContext } from 'react'
import { CharacterContext } from '@/contexts/CharacterContext'

export function useCharacters() {
  // Contextの値を取得
  const context = useContext(CharacterContext)

  // Contextが未定義の場合はエラーをスロー
  if (!context) {
    throw new Error('useCharacters must be used within a CharacterProvider')
  }

  // Contextの値を返す
  return context
}
