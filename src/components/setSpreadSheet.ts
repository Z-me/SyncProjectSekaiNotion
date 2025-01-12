import type { MusicResData, ComboResData, LevelResData } from '@/lib/types';

export const setMusicDbData = (data: MusicResData[]): void => {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SyncedMusicDB');
  if (!sheet) return;

  const result = data.map((element) => [
    element.Title,
    element.ID,
    element.IconUrl,
    element.BPM,
    element.Time,
    element.Lyric,
    element.Composer,
    element.Arranger,
    element.Date,
    element.DateRage,
  ]);
  sheet.getRange(2, 1, result.length, 10).setValues(result);
  Logger.log(result.length);
};

export const setComboDbData = (data: ComboResData[]): void => {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SyncedComboDb');
  if (!sheet) return;

  const result = data.map((element) => [
    element.Title,
    element.EASY,
    element.NORMAL,
    element.HARD,
    element.EXPERT,
    element.MASTER,
    element.APPEND,
  ]);
  sheet.getRange(2, 1, result.length, 7).setValues(result);
  Logger.log(result.length);
};

export const setLevelDbData = (data: LevelResData[]): void => {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SyncedLevelDb');
  if (!sheet) return;
  const result = data.map((element) => [
    element.Title,
    element.EASY,
    element.NORMAL,
    element.HARD,
    element.EXPERT,
    element.MASTER,
    element.APPEND,
  ]);
  sheet.getRange(2, 1, result.length, 7).setValues(result);
  Logger.log(result.length);
};
