# SyncProjectSekaiNotion
プロセカのNotionDBとのスプレッドシート連携のGASを管理するリポジトリ

## 各種環境

|  | Gss | Gas |
|---:|:---|:---|
|Prod| [1mlOwv3_8ECydBEjlwggy_3CWlNkelmAkxfTA4j33I20](https://docs.google.com/spreadsheets/d/1mlOwv3_8ECydBEjlwggy_3CWlNkelmAkxfTA4j33I20/edit?gid=391047353#gid=391047353) | [1WWpg09TbtTldMZjlKDsV7gcXBBYpTuIDO3uCA_EoFb_Q3--WevV-KWY7](https://script.google.com/u/0/home/projects/1WWpg09TbtTldMZjlKDsV7gcXBBYpTuIDO3uCA_EoFb_Q3--WevV-KWY7/settings) |
|Dev| [15Qiuus-FRrF4Fc_L133ARamqaFhi3jjms_T-hYgJ6BI](https://docs.google.com/spreadsheets/d/15Qiuus-FRrF4Fc_L133ARamqaFhi3jjms_T-hYgJ6BI/edit?usp=sharing) | [146nxgbAgUWNvyWvBLg5Z2me640NKnmfAb-m8OKBmCxiEy9rAoepLnxWC](https://script.google.com/u/0/home/projects/146nxgbAgUWNvyWvBLg5Z2me640NKnmfAb-m8OKBmCxiEy9rAoepLnxWC/edit) |


## NPMスクリプト

- format
  - prettierを用いたフォーマットを実施
- build
  - 既存コードをGasの形式に変換
- push:(develop|production)
  - (develop|production) にbuildに該当コードを反映
- deploy:(develop|production)
  - (develop|production) にbuildに該当コードBuildした後反映
