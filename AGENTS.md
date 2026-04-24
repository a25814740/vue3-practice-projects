# AGENTS.md

## 專案目標

這個倉庫的目的，是建立一套 **Vue 3 練功型學習倉庫** 的 AI Agent 可讀基礎結構。  
後續任何 Agent 都應先讀文件，再依階段進行實作，不要跳過學習路線直接硬寫。

## 工作原則

- 優先建立可讀、可驗收、可延伸的內容
- 先做文件與骨架，再做功能實作
- 以 Vue 3 官方常見做法為主
- 不過度炫技，不引入不必要依賴
- 每個 stage 都要能獨立驗收
- 如果需求模糊，先遵守 `PROJECT_RULES.md` 與對應子專案的 `docs/STAGE_CHECKLIST.md`

## 閱讀順序

1. `AGENTS.md`
2. `TASK.md`
3. `PROJECT_RULES.md`
4. `SKILLS.md`
5. `docs/LEARNING_PATH.md`
6. `docs/PROJECT_MAP.md`
7. 子專案的 `docs/STAGE_CHECKLIST.md`
8. 子專案的 `docs/ROADMAP.md`
9. `projects-ansers/<project>/docs/answer/stage-xx.md`

## 修改前必讀文件

在修改任何子專案之前，先讀：

- `PROJECT_RULES.md`
- `docs/FILE_STRUCTURE.md`
- `docs/NAMING_CONVENTION.md`
- 該子專案的 `docs/STAGE_CHECKLIST.md`
- 該子專案的 `docs/ROADMAP.md`

## 開發優先順序

1. 文件與結構先完整
2. 低難度子專案先完成
3. 每個 stage 先做最小可驗收版本
4. 再補強 edge case、重構與測試觀念
5. 最後才考慮進一步最佳化

## 禁止事項

- 不要一次跳到困難專案
- 不要為了好看而堆重 UI
- 不要在文件未更新前直接改大範圍程式
- 不要新增與學習目標無關的重依賴
- 不要讓單一 stage 失去獨立驗收能力

## 每次修改後要更新的文件

至少更新以下其中一項：

- `docs/PROGRESS.md`
- 對應子專案的 `docs/ROADMAP.md`
- 對應子專案的 `docs/STAGE_CHECKLIST.md`
- 對應子專案的 `docs/answer/stage-xx.md`

如果修改了結構或命名，也要同步更新：

- `docs/FILE_STRUCTURE.md`
- `docs/NAMING_CONVENTION.md`
- `SKILLS.md`

## 如何回報進度

回報時請直接說明：

- 已完成哪些文件或骨架
- 目前在哪個子專案、哪個 stage
- 下一步要做什麼
- 有沒有阻塞與假設

## 如何判定一個 stage 完成

一個 stage 完成，至少要滿足：

- 功能符合該 stage 的目標
- 相關文件已更新
- `docs/answer/stage-xx.md` 可對照實作
- 可以單獨驗收，不依賴下一個 stage

## 若需求模糊，優先遵守

1. `PROJECT_RULES.md`
2. 對應子專案的 `docs/STAGE_CHECKLIST.md`
3. `docs/LEARNING_PATH.md`
4. `docs/ARCHITECTURE.md`
