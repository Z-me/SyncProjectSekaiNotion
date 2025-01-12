const CustomMenu = () => {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('実行')
    .addItem('全同期', 'main')
    .addItem('楽曲DB同期', 'syncMusicDbData')
    .addItem('コンボDB同期', 'syncComboDbData')
    .addItem('レベルDB同期', 'syncLevelDbData')
    .addToUi();
};

export default CustomMenu;
