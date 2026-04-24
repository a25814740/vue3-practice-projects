# ARCHITECTURE.md

## 倉庫架構選擇

這個倉庫採用 **多資料夾式 monorepo 風格**，原因很單純：

- 每個練習專案是獨立關卡
- 文件可以共用，但實作可以分開
- AI Agent 能先讀總覽，再進入個別專案
- 後續若要改成真正的 monorepo 工具鏈，也不用重寫整體概念

## 子專案關係

- `01-counter-todo-lab/` 是入門關卡
- `02-notes-habit-tracker/` 進一步練共享狀態與 composables
- `03-mini-admin-dashboard/` 開始碰 Router、Pinia、CRUD 與非同步流程
- `04-project-task-manager/` 走向較完整的模組化與權限概念

每個子專案都應該可以獨立存在，但學習順序不建議打散。

## 文件如何支援 AI Agent

文件分成三層：

1. **總覽層**：`README.md`、`TASK.md`、`PROJECT_RULES.md`、`SKILLS.md`
2. **路線層**：`docs/LEARNING_PATH.md`、`docs/PROJECT_MAP.md`、`docs/STACK.md`
3. **執行層**：各子專案的 `docs/STAGE_CHECKLIST.md`、`docs/ROADMAP.md`，以及獨立的 `projects-ansers/<project>/docs/answer/`

這樣做的目的，是讓 AI Agent 不需要重新猜整體方向，只要沿著文件就能往下做。

## 答案文檔與正式程式碼分工

- `projects-ansers/<project>/docs/answer/`：教學答案、解法思路、驗收重點
- `src/`：正式實作程式碼
- `docs/STAGE_CHECKLIST.md`：該 stage 要做什麼
- `docs/ROADMAP.md`：整體進度與下一步

原則上，先有答案文件，再有對應實作；如果先做實作，至少也要同步補答案文件，避免知識斷層。  
答案獨立放在 `projects-ansers/`，是為了讓正式專案目錄保持乾淨。
