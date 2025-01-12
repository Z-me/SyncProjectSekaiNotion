import CustomMenu from '@/components/menu';
import {
  getMusicDbData,
  getComboDbData,
  getLevelDbData,
} from './components/connectNotion';
import {
  setMusicDbData,
  setComboDbData,
  setLevelDbData,
} from './components/setSpreadSheet';
import { getCalculatedPointsByCombo } from '@/components/customFunctions';

const syncMusicDbData = (): void => {
  const musicRes = getMusicDbData();
  setMusicDbData(musicRes);
};

const syncComboDbData = (): void => {
  const comboRes = getComboDbData();
  setComboDbData(comboRes);
};

const syncLevelDbData = (): void => {
  const levelRes = getLevelDbData();
  setLevelDbData(levelRes);
};

const main = (): void => {
  const musicRes = getMusicDbData();
  const comboRes = getComboDbData();
  const levelRes = getLevelDbData();
  setMusicDbData(musicRes);
  setComboDbData(comboRes);
  setLevelDbData(levelRes);
};

const onOpen = (): void => {
  CustomMenu(); // CustomMenu
};

(global as any).onOpen = onOpen;
(global as any).main = main;
(global as any).syncMusicDbData = syncMusicDbData;
(global as any).syncComboDbData = syncComboDbData;
(global as any).syncLevelDbData = syncLevelDbData;
(global as any).getCalculatedPointsByCombo = getCalculatedPointsByCombo;
