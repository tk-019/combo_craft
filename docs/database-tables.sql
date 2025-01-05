
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

-- movesテーブル
CREATE TABLE moves (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    character_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('System', 'Special', 'Normal')),
    input_sequence TEXT,
    damage INTEGER,
    is_rush BOOLEAN DEFAULT FALSE,
    is_cancel BOOLEAN DEFAULT FALSE,
    charge_time INTEGER DEFAULT 0,
    max_charge_level INTEGER DEFAULT 0,
    FOREIGN KEY (character_id) REFERENCES characters (id)
);

-- basic_inputsテーブル
CREATE TABLE basic_inputs (
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
    FOREIGN KEY (basic_input_id) REFERENCES basic_inputs (id)
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
    FOREIGN KEY (basic_input_id) REFERENCES basic_inputs (id)
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
    FOREIGN KEY (basic_input_id) REFERENCES basic_inputs (id)
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
