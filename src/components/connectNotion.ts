import api from '@/lib/fetch';
import type {
  DatabaseResponse,
  MusicResData,
  ComboResData,
  LevelResData,
} from '@/lib/types';

export const getMusicDbData = (): MusicResData[] => {
  const dbId = PropertiesService.getScriptProperties().getProperty('MusicDbId');
  if (!dbId) {
    console.error('Music Database ID is not set');
    return [];
  }
  const res = api(dbId);
  return res.map((element: DatabaseResponse) => ({
    Title: element.properties['楽曲名'].title[0].plain_text,
    ID: element.properties['ID'].rich_text[0]?.plain_text || '',
    IconUrl: element.cover?.file?.url || '',
    BPM: element.properties['BPM(max)'].number || '',
    Time: element.properties['time(s)'].formula?.number || '',
    Lyric: element.properties['作詞'].rich_text[0]?.plain_text || '',
    Composer: element.properties['作曲'].rich_text[0]?.plain_text || '',
    Arranger: element.properties['編曲'].rich_text[0]?.plain_text || '',
    Date: element.properties['配信日'].date?.start || '',
    DateRage: element.properties['オリジナル公開時期'].formula?.string || '',
  }));
};

export const getComboDbData = (): ComboResData[] => {
  const dbId = PropertiesService.getScriptProperties().getProperty('ComboDbId');
  if (!dbId) {
    console.error('Music Database ID is not set');
    return [];
  }
  const res = api(dbId);

  return res.map((element) => ({
    EASY: element.properties['EASY'].number,
    NORMAL: element.properties['NORMAL'].number,
    HARD: element.properties['HARD'].number,
    EXPERT: element.properties['EXPERT'].number,
    MASTER: element.properties['MASTER'].number,
    APPEND: element.properties['APPEND'].number,
    Title: element.properties['楽曲名'].title[0].plain_text,
  }));
};

export const getLevelDbData = (): LevelResData[] => {
  const dbId = PropertiesService.getScriptProperties().getProperty('LevelDbId');
  if (!dbId) {
    console.error('Level Database ID is not set');
    return [];
  }
  const res = api(dbId);

  return res.map((element) => ({
    EASY: element.properties['EASY'].number,
    NORMAL: element.properties['NORMAL'].number,
    HARD: element.properties['HARD'].number,
    EXPERT: element.properties['EXPERT'].number,
    MASTER: element.properties['MASTER'].number,
    APPEND: element.properties['APPEND'].number,
    Title: element.properties['楽曲名'].title[0].plain_text,
  }));
};
