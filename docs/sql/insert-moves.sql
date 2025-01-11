-- movesテーブル（通常技、特殊技、必殺技を含む）
-- CREATE TABLE moves (
--     id INTEGER PRIMARY KEY AUTO_INCREMENT,
--     character_id INTEGER NOT NULL,
--     name VARCHAR(255) NOT NULL, -- 技名
--     type ENUM('Normal', 'OverDrive', 'Special', 'Super') NOT NULL, -- 技の種類
--     -- input_sequence TEXT, -- 入力シーケンス
--     damage INTEGER, -- ダメージ量
--     allows_cancel_rush BOOLEAN DEFAULT FALSE, -- キャンセルラッシュ可能か
--     sa_gauge_required INTEGER DEFAULT 0, -- 必要なSAゲージ量
--     drive_gauge_required INTEGER DEFAULT 0, -- 必要なドライブゲージ量
--     startup_frames INTEGER, -- 始動フレーム
--     active_frames INTEGER, -- 持続フレーム
--     recovery_frames INTEGER, -- 硬直フレーム
--     on_hit_frames INTEGER, -- ヒット時フレーム
--     on_block_frames INTEGER, -- ガード時フレーム
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (character_id) REFERENCES characters (id)
-- );

INSERT INTO moves (character_id, name, type, damage, allows_cancel_rush, sa_gauge_required, drive_gauge_required, startup_frames, active_frames, recovery_frames, on_hit_frames, on_block_frames) VALUES
(1, '弱パンチ', 'Normal', 30, 1, 0, 0, 3, 2, 5, 10, 5),
(1, '中パンチ', 'Normal', 50, 1, 0, 0, 5, 3, 7, 15, 10),
(1, '強パンチ', 'Normal', 70, 1, 0, 0, 7, 4, 9, 20, 15),
(1, '弱キック', 'Normal', 30, 1, 0, 0, 3, 2, 5, 10, 5),
(1, '中キック', 'Normal', 50, 1, 0, 0, 5, 3, 7, 15, 10),
(1, '強キック', 'Normal', 70, 1, 0, 0, 7, 4, 9, 20, 15),
(1, 'しゃがみ弱パンチ', 'Normal', 30, 1, 0, 0, 3, 2, 5, 10, 5),
(1, 'しゃがみ中パンチ', 'Normal', 50, 1, 0, 0, 5, 3, 7, 15, 10),
(1, 'しゃがみ強パンチ', 'Normal', 70, 1, 0, 0, 7, 4, 9, 20, 15),
(1, 'しゃがみ弱キック', 'Normal', 30, 1, 0, 0, 3, 2, 5, 10, 5),
(1, 'しゃがみ中キック', 'Normal', 50, 1, 0, 0, 5, 3, 7, 15, 10),
(1, 'しゃがみ強キック', 'Normal', 70, 1, 0, 0, 7, 4, 9, 20, 15),
(1, 'ジャンプ弱パンチ', 'Normal', 30, 1, 0, 0, 3, 2, 5, 10, 5),
(1, 'ジャンプ中パンチ', 'Normal', 50, 1, 0, 0, 5, 3, 7, 15, 10),
(1, 'ジャンプ強パンチ', 'Normal', 70, 1, 0, 0, 7, 4, 9, 20, 15),
(1, 'ジャンプ弱キック', 'Normal', 30, 1, 0, 0, 3, 2, 5, 10, 5),
(1, 'ジャンプ中キック', 'Normal', 50, 1, 0, 0, 5, 3, 7, 15, 10),
(1, 'ジャンプ強キック', 'Normal', 70, 1, 0, 0, 7, 4, 9, 20, 15),
(1, '投げ', 'Normal', 120, 0, 0, 0, 5, 1, 10, 0, 0),
(1, '後ろ投げ', 'Normal', 120, 0, 0, 0, 5, 1, 10, 0, 0),
(1, '大ゴス', 'Normal', 120, 0, 0, 0, 5, 1, 10, 0, 0),
(1, '弱波動拳', 'Special', 100, 1, 0, 0, 10, 5, 15, 25, 20),
(1, '中波動拳', 'Special', 120, 1, 0, 0, 10, 5, 15, 25, 20),
(1, '強波動拳', 'Special', 150, 1, 0, 0, 10, 5, 15, 25, 20),
(1, '弱昇龍拳', 'Special', 120, 1, 0, 0, 10, 5, 15, 25, 20),
(1, '中昇龍拳', 'Special', 150, 1, 0, 0, 10, 5, 15, 25, 20),
(1, '強昇龍拳', 'Special', 180, 1, 0, 0, 10, 5, 15, 25, 20),
(1, '弱竜巻旋風脚', 'Special', 120, 1, 0, 0, 10, 5, 15, 25, 20),
(1, '中竜巻旋風脚', 'Special', 120, 1, 0, 0, 10, 5, 15, 25, 20),
(1, '強竜巻旋風脚', 'Special', 120, 1, 0, 0, 10, 5, 15, 25, 20),
(1, 'OD波動拳', 'OverDrive', 300, 1, 0, 0, 10, 5, 15, 25, 20),
(1, 'OD昇龍拳', 'OverDrive', 300, 1, 0, 0, 10, 5, 15, 25, 20),
(1, 'OD竜巻旋風脚', 'OverDrive', 300, 1, 0, 0, 10, 5, 15, 25, 20),
(1, '真空波動拳', 'Super', 500, 1, 0, 0, 10, 5, 15, 25, 20),
(1, '真昇竜拳', 'Super', 500, 1, 0, 0, 10, 5, 15, 25, 20);
