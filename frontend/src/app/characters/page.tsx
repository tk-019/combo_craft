'use client'

import React, { useEffect, useState } from 'react'
import CharacterModal from '@/components/CharacterModal'
import { Character } from '@/models/character'
import Image from 'next/image'

export default function Page() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  )

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch('/api/characters')
      const data = await res.json()
      setCharacters(data)
    }

    fetchCharacters()
  }, [])

  const handleOpen = (character: Character) => {
    setSelectedCharacter(character)
    setIsOpen(true)
  }

  const handleClose = () => {
    setSelectedCharacter(null)
    setIsOpen(false)
  }

  return (
    <div>
      <h1>Character List</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {characters.map((character) => (
          <div
            key={character.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              textAlign: 'center',
              cursor: 'pointer',
            }}
            onClick={() => handleOpen(character)}
          >
            <Image
              src={`/images/${character.id}.webp`}
              alt={character.name}
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
            />
            <p>{character.name}</p>
          </div>
        ))}
      </div>

      {/* モーダル */}
      <CharacterModal
        character={selectedCharacter}
        open={isOpen}
        onClose={handleClose}
      />
    </div>
  )
}
