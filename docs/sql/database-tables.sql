-- テーブルを全てdropする
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS moves;
DROP TABLE IF EXISTS combo_conditions;
DROP TABLE IF EXISTS combo_position_conditions;
DROP TABLE IF EXISTS combo_character_conditions;
DROP TABLE IF EXISTS combo_outcomes;
DROP TABLE IF EXISTS system_inputs;
DROP TABLE IF EXISTS move_inputs;
DROP TABLE IF EXISTS combos;
DROP TABLE IF EXISTS combo_inputs;
DROP TABLE IF EXISTS combo_moves;
DROP TABLE IF EXISTS combo_updates;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS combo_tags;
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS media_files;
DROP TABLE IF EXISTS basic_inputs;




-- usersテーブル
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    oauth_provider VARCHAR(255),
    oauth_id VARCHAR(255) UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- charactersテーブル
CREATE TABLE characters (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- movesテーブル（通常技、特殊技、必殺技を含む）
CREATE TABLE moves (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    character_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL, -- 技名
    type ENUM('Normal', 'OverDrive', 'Special', 'Super') NOT NULL, -- 技の種類
    -- input_sequence TEXT, -- 入力シーケンス
    damage INTEGER, -- ダメージ量
    allows_cancel_rush BOOLEAN DEFAULT FALSE, -- キャンセルラッシュ可能か
    sa_gauge_required INTEGER DEFAULT 0, -- 必要なSAゲージ量
    drive_gauge_required INTEGER DEFAULT 0, -- 必要なドライブゲージ量
    startup_frames INTEGER, -- 始動フレーム
    active_frames INTEGER, -- 持続フレーム
    recovery_frames INTEGER, -- 硬直フレーム
    on_hit_frames INTEGER, -- ヒット時フレーム
    on_block_frames INTEGER, -- ガード時フレーム
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (character_id) REFERENCES characters (id)
);

-- -- combo_conditionsテーブル（コンボの限定条件を管理）
-- CREATE TABLE combo_conditions (
--     id INTEGER PRIMARY KEY AUTO_INCREMENT,
--     combo_id INTEGER NOT NULL, -- コンボID
--     condition_type ENUM('position', 'character', 'other') NOT NULL, -- 条件の種類
--     FOREIGN KEY (combo_id) REFERENCES combos (id)
-- );
-- combo_position_conditionsテーブル（コンボの位置や距離条件を管理）
CREATE TABLE combo_position_conditions (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    combo_id INTEGER NOT NULL, -- `combos`のID
    position_type ENUM('corner_only', 'no_corner', 'mid_screen', 'distance') NOT NULL, -- 条件の種類
    distance ENUM('close', 'far', 'mid', 'tip') DEFAULT NULL, -- 距離の詳細条件
    character_id INTEGER DEFAULT NULL, -- 対象キャラクター（NULLなら全キャラ共通）
    FOREIGN KEY (combo_id) REFERENCES combos (id),
    FOREIGN KEY (character_id) REFERENCES characters (id)
);
-- combo_character_conditionsテーブル（コンボの限定対象キャラクター条件を管理）
CREATE TABLE combo_character_conditions (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    combo_id INTEGER NOT NULL, -- コンボID
    character_id INTEGER NOT NULL, -- 対象キャラクターID
    FOREIGN KEY (combo_id) REFERENCES combos (id),
    FOREIGN KEY (character_id) REFERENCES characters (id)
);

-- combo_outcomesテーブル（コンボ終了後の状況を管理）
CREATE TABLE combo_outcomes (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    combo_id INTEGER NOT NULL, -- 対応するコンボID
    wakeup_pressure BOOLEAN DEFAULT FALSE, -- 起き攻め可否
    frame_advantage INTEGER, -- 有利/不利フレーム（+/-）
    distance ENUM('close', 'dash', 'drive_rush', 'far') NOT NULL, -- 終了時の距離
    meter_gain INTEGER DEFAULT 0, -- 得られるゲージ量
    FOREIGN KEY (combo_id) REFERENCES combos (id)
);


-- system_inputsテーブル
CREATE TABLE system_inputs (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    input_sequence VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);

-- move_inputsテーブル
CREATE TABLE move_inputs (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    move_id INTEGER NOT NULL,
    basic_input_id INTEGER NOT NULL,
    sequence_order INTEGER NOT NULL,
    simultaneous BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (move_id) REFERENCES moves (id),
    FOREIGN KEY (basic_input_id) REFERENCES system_inputs (id)
);

-- combosテーブル
CREATE TABLE combos (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    character_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    damage INTEGER,
    meter_used INTEGER,
    meter_gain INTEGER,
    difficulty VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (character_id) REFERENCES characters (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- combo_inputsテーブル
CREATE TABLE combo_inputs (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    combo_id INTEGER NOT NULL,
    basic_input_id INTEGER NOT NULL,
    sequence_order INTEGER NOT NULL,
    FOREIGN KEY (combo_id) REFERENCES combos (id),
    FOREIGN KEY (basic_input_id) REFERENCES system_inputs (id)
);

-- combo_movesテーブル
CREATE TABLE combo_moves (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    combo_id INTEGER NOT NULL,
    move_id INTEGER NULL,
    basic_input_id INTEGER NULL,
    sequence_order INTEGER NOT NULL,
    charge_level INTEGER DEFAULT 0,
    FOREIGN KEY (combo_id) REFERENCES combos (id),
    FOREIGN KEY (move_id) REFERENCES moves (id),
    FOREIGN KEY (basic_input_id) REFERENCES system_inputs (id)
);

-- combo_updatesテーブル
CREATE TABLE combo_updates (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    combo_id INTEGER NOT NULL,
    previous_damage INTEGER,
    previous_meter_used INTEGER,
    previous_meter_gain INTEGER,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (combo_id) REFERENCES combos (id)
);

-- tagsテーブル
CREATE TABLE tags (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

-- combo_tagsテーブル
CREATE TABLE combo_tags (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    combo_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    FOREIGN KEY (combo_id) REFERENCES combos (id),
    FOREIGN KEY (tag_id) REFERENCES tags (id)
);

-- ratingsテーブル
CREATE TABLE ratings (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    combo_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (combo_id) REFERENCES combos (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- media_filesテーブル
CREATE TABLE media_files (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    combo_id INTEGER NOT NULL,
    file_url TEXT NOT NULL,
    file_type VARCHAR(50) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (combo_id) REFERENCES combos (id)
);

-- 多言語対応はname等を言語毎のレコードで持つ。後日対応予定