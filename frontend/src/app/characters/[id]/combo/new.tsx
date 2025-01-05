'use client';

import React, { useState, useEffect } from 'react';

export default function ComboForm() {
  const [moves, setMoves] = useState([]);
  const [basicInputs, setBasicInputs] = useState([]);
  const [selectedMoveId, setSelectedMoveId] = useState<number | null>(null);
  const [inputSequence, setInputSequence] = useState<number[]>([]);

  // APIからデータを取得
  useEffect(() => {
    fetch('/api/characters/1/moves') // キャラクターIDは動的に設定可能
      .then((res) => res.json())
      .then((data) => setMoves(data));

    fetch('/api/basicInputs')
      .then((res) => res.json())
      .then((data) => setBasicInputs(data));
  }, []);

  // 技の選択
  const handleMoveChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMoveId(Number(e.target.value));
  };

  // 入力ボタンのクリック
  const handleInputClick = (inputId: number) => {
    setInputSequence((prev) => [...prev, inputId]);
  };

  // コンボ登録の送信
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const comboData = {
      move_id: selectedMoveId,
      basic_input_ids: inputSequence,
    };

    console.log('Combo Data:', comboData);
    // API送信部分
    fetch('/api/combos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comboData),
    });

    // リセット
    setSelectedMoveId(null);
    setInputSequence([]);
  };

  return (
    <div>
      <h1>Register Combo</h1>
      <form onSubmit={handleSubmit}>
        {/* 技の選択 */}
        <label>
          Select Move:
          <select value={selectedMoveId || ''} onChange={handleMoveChange} required>
            <option value="">-- Select a Move --</option>
            {moves.map((move: any) => (
              <option key={move.id} value={move.id}>
                {move.name}
              </option>
            ))}
          </select>
        </label>

        {/* 入力シーケンス */}
        <div>
          <h3>Input Sequence:</h3>
          <div style={{ display: 'flex', gap: '5px' }}>
            {basicInputs.map((input: any) => (
              <button key={input.id} type="button" onClick={() => handleInputClick(input.id)}>
                {input.input_sequence}
              </button>
            ))}
          </div>
          <p>Selected Sequence: {inputSequence.join(', ')}</p>
        </div>

        <button type="submit">Register Combo</button>
      </form>
    </div>
  );
}
