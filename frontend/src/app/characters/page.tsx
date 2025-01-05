'use client';

import React, { useState } from 'react';
import CharacterModal from '@/components/CharacterModal';
import { Character } from '@/Types/Character';

const characters: Character[] = [
  {
    id: 1,
    name: 'Ryu',
    imageUrl: '/images/ryu.webp',
    health: 1000,
    walkSpeed: { forward: 5.5, backward: 4.5 },
    commands: [
      { name: 'Hadouken', input: '↓↘→ + P', damage: 100, gaugeUsed: 0, gaugeGain: 20, difficulty: 'Easy' },
      { name: 'Shoryuken', input: '→↓↘ + P', damage: 120, gaugeUsed: 0, gaugeGain: 25, difficulty: 'Medium' },
    ],
  },
  // 他のキャラクター
];

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
            <img
              src={character.imageUrl}
              alt={character.name}
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <p>{character.name}</p>
          </div>
        ))}
      </div>

      {/* モーダル */}
      <CharacterModal character={selectedCharacter} open={isOpen} onClose={handleClose} />
    </div>
  );
}
