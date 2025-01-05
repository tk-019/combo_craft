import React from 'react';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Character } from '@/models/character';

interface CharacterModalProps {
  character: Character | null;
  open: boolean;
  onClose: () => void;
}

export default function CharacterModal({ character, open, onClose }: CharacterModalProps) {
  if (!character) return null;

  return (
    <Modal open={open} onClose={onClose}>
      <Paper style={{ padding: '20px', margin: 'auto', maxWidth: '400px' }}>
        <h2>{character.name}</h2>
        {/* <img
          src={character.id}
          alt={character.name}
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        /> */}
        {/* <p>Health: {character.health}</p> */}
        {/* <p>Walk Speed (Forward): {character.walkSpeed.forward}</p> */}
        {/* <p>Walk Speed (Backward): {character.walkSpeed.backward}</p> */}
        <h3>Commands:</h3>
        <ul>
          {/* {character.commands.map((cmd, index) => (
            <li key={index}>
              {cmd.name}: {cmd.input}
            </li>
          ))} */}
        </ul>
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      </Paper>
    </Modal>
  );
}
