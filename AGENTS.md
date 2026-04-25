# AGENTS.md

## 專案目標

這個倉庫是 Vue 3 練功型學習倉庫。  
正式程式碼與階段答案分離，讓 AI Agent 和人類都能依照文件接手，不用重新猜整體方向。

## 工作原則

- 先讀文件，再動手改碼
- 先做骨架，再做功能
- 先做低難度，再往上疊
- 每個 stage 都要能獨立驗收
- 不要把不必要的依賴先加進來

## 閱讀順序

1. `AGENTS.md`
2. `TASK.md`
3. `PROJECT_RULES.md`
4. `SKILLS.md`
5. `docs/LEARNING_PATH.md`
6. `docs/PROJECT_MAP.md`
7. 子專案的 `docs/STAGE_CHECKLIST.md`
8. 子專案的 `docs/ROADMAP.md`
9. `projects-ansers/<project>/stage-xx/`

## 修改前必讀

先讀這些再改任何子專案：

- `PROJECT_RULES.md`
- `docs/FILE_STRUCTURE.md`
- `docs/NAMING_CONVENTION.md`
- 對應子專案的 `docs/STAGE_CHECKLIST.md`
- 對應子專案的 `docs/ROADMAP.md`

## 開發優先順序

1. 先看需求與學習路線
2. 先確認 stage 邊界
3. 再看 `projects-ansers/` 的參考答案
4. 最後才動正式專案程式碼

## 禁止事項

- 不要跳過低階 stage 直接做高階功能
- 不要讓文件與實作脫節
- 不要把所有狀態塞進 store
- 不要為了炫技先加重依賴

## 每次修改後要更新

如果改了下列任一項，至少要同步更新對應文件：

- `docs/PROGRESS.md`
- `docs/FILE_STRUCTURE.md`
- `docs/ARCHITECTURE.md`
- `SKILLS.md`
- 對應子專案的 `docs/STAGE_CHECKLIST.md`
- 對應子專案的 `docs/ROADMAP.md`

## 如何回報進度

回報時請直接說：

- 完成了哪個 stage 或哪個文件
- 更新了哪些路徑
- 下一步要做什麼
- 有沒有未解決的假設或阻塞

## 如何判定 stage 完成

一個 stage 算完成，至少要符合：

- 功能符合 stage 目標
- 對應的答案文件存在於 `projects-ansers/`
- 可以單獨驗收
- 下一個 stage 接得住

## 如果需求模糊

優先順序如下：

1. `PROJECT_RULES.md`
2. 對應子專案的 `docs/STAGE_CHECKLIST.md`
3. `docs/LEARNING_PATH.md`
4. `docs/ARCHITECTURE.md`

