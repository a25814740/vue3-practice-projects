# STAGE_CHECKLIST.md

## 專案目標

把單純的清單練習升級成有統計、可編輯、可拆邏輯的中階專案。

## 本專案會學到哪些 Vue 3 能力

- `computed`
- `watch`
- `watchEffect`
- composables
- `provide / inject`
- slots
- 清單與條件渲染

## 分階段列表

| Stage | 名稱 | 必做/選做 | 答案文件 |
| --- | --- | --- | --- |
| 01 | 資料模型與列表 | 必做 | `projects-ansers/02-notes-habit-tracker/docs/answer/stage-01.md` |
| 02 | 編輯與統計 | 必做 | `projects-ansers/02-notes-habit-tracker/docs/answer/stage-02.md` |
| 03 | composables 與共享邏輯 | 必做 | `projects-ansers/02-notes-habit-tracker/docs/answer/stage-03.md` |
| 04 | slots 與延伸優化 | 選做 | `projects-ansers/02-notes-habit-tracker/docs/answer/stage-04.md` |

## Stage 01：資料模型與列表

- **目標**：建立筆記或習慣的資料結構與基本展示
- **要完成的功能**：新增資料、顯示列表、空狀態
- **會碰到的 Vue 3 重點**：`ref` / `reactive`、`v-for`、條件渲染
- **驗收條件**：資料可正確顯示，空資料時有提示
- **完成後建議自我檢查項目**：資料欄位是否簡單一致、命名是否清楚

## Stage 02：編輯與統計

- **目標**：讓資料可以被編輯，並顯示衍生統計
- **要完成的功能**：編輯、刪除、完成率或數量統計
- **會碰到的 Vue 3 重點**：`computed`、`watch`
- **驗收條件**：資料更新後統計同步變化
- **完成後建議自我檢查項目**：統計是否集中計算、是否避免重複邏輯

## Stage 03：composables 與共享邏輯

- **目標**：把重複的資料處理邏輯抽出來
- **要完成的功能**：共用表單邏輯、儲存邏輯或過濾邏輯
- **會碰到的 Vue 3 重點**：composables、`provide / inject`
- **驗收條件**：重複程式碼下降，邏輯集中且可重用
- **完成後建議自我檢查項目**：composable 是否真的有重用價值

## Stage 04：slots 與延伸優化

- **目標**：讓元件更容易擴充與替換內容
- **要完成的功能**：可插槽元件、卡片區塊、提示區塊
- **會碰到的 Vue 3 重點**：slots、元件設計
- **驗收條件**：插槽可正常替換內容，元件責任清楚
- **完成後建議自我檢查項目**：是否真的需要 slots，還是只是為了炫技
