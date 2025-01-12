type PropertyKey =
  | MusicPropertyKey
  | DifficultyPropertyKey
  | ComboPropertyKey
  | LevelPropertyKey;

type MusicPropertyKey =
  | '楽曲名'
  | '編曲'
  | '作曲'
  | '作詞'
  | 'BPM'
  | 'ゲーム時間'
  | 'MV'
  | '原曲URL'
  | '配信日'
  | 'オリジナル公開日'
  | 'オリジナル公開時期'
  | 'time(s)'
  | 'BPM(max)'
  | 'Group'
  | 'Type'
  | 'Tag'
  | '略称(愛称)'
  | 'Lv DB'
  | 'Combo DB'
  | 'Points DB'
  | 'セカイver'
  | 'AnotherVocal ver'
  | 'バーチャル・シンガーver';

type DifficultyPropertyKey =
  | 'EASY'
  | 'NORMAL'
  | 'HARD'
  | 'EXPERT'
  | 'MASTER'
  | 'APPEND';

type ComboPropertyKey =
  | '楽曲名'
  | 'ID'
  | 'EASY 密度(notes/sec)'
  | 'NORMAL 密度(notes/sec)'
  | 'HARD 密度(notes/sec)'
  | 'EXPERT 密度(notes/sec)'
  | 'MASTER 密度(notes/sec)'
  | 'APPEND 密度(notes/sec)'
  | '楽曲名(Origin)'
  | 'Points DB'
  | 'Time'
  | '作曲者'
  | '作曲者_';

type LevelPropertyKey =
  | '楽曲名'
  | 'ID'
  | 'EASY Difficulty constants'
  | 'NORMAL Difficulty constants'
  | 'HARD Difficulty constants'
  | 'EXPERT Difficulty constants'
  | 'MASTER Difficulty constants'
  | 'APPEND Difficulty constants';

export type DatabaseResponse = {
  object: 'database';
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: { object: 'user'; id: string };
  last_edited_by: { object: 'user'; id: string };
  title: Array<{ type: 'text'; text: { content: string } }>;
  cover: { type: 'file'; file: { url: string; expiry_time: string } };
  icon: { type: 'file'; file: { url: string; expiry_time: string } };
  properties: { [key in PropertyKey]: { [key: string]: any } };
  parent: { [key: string]: string };
};

export type MusicResData = {
  Title: string;
  ID: string;
  IconUrl: string;
  BPM: string;
  Time: string;
  Lyric: string;
  Composer: string;
  Arranger: string;
  Date: string;
  DateRage: string;
};

type DifficultyData = {
  EASY: number;
  NORMAL: number;
  HARD: number;
  EXPERT: number;
  MASTER: number;
  APPEND: number;
  Title: string;
};

export type ComboResData = DifficultyData;
export type LevelResData = DifficultyData;
