'use client';

import React, { useState } from 'react';
import CharacterModal from '@/components/CharacterModal';
import { Character } from '@/models/character';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleOpen = (character: Character) => {
    setSelectedCharacter(character);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedCharacter(null);
    setIsOpen(false);
  };

  return (
    <div>
      <h1>Character List</h1>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {/* {characters.map((character) => (
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
            <img
              src={character.imageUrl}
              alt={character.name}
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <p>{character.name}</p>
          </div>
        ))} */}
      </div>

      {/* モーダル */}
      <CharacterModal character={selectedCharacter} open={isOpen} onClose={handleClose} />
    </div>
  );
}
