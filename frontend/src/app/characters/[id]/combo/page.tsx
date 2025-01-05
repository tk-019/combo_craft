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
      <h1>Combos</h1>
    </div>
  );
}
