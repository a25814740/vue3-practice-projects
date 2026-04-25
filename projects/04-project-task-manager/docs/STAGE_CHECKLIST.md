# STAGE_CHECKLIST.md

## 專案目標

做出一個較完整的任務管理應用，整合路由、狀態、元件設計與權限概念。

## 本專案會學到哪些 Vue 3 能力

- Router
- Pinia
- `provide / inject`
- 動態元件
- slots
- 非同步流程
- 權限與守衛概念

## 分階段列表

| Stage | 名稱 | 必做/選做 | 答案文件 |
| --- | --- | --- | --- |
| 01 | 模組與路由骨架 | 必做 | `projects-ansers/04-project-task-manager/stage-01/stage-01.md` |
| 02 | 任務與專案資料流 | 必做 | `projects-ansers/04-project-task-manager/stage-02/stage-02.md` |
| 03 | 共享邏輯與可重用元件 | 必做 | `projects-ansers/04-project-task-manager/stage-03/stage-03.md` |
| 04 | 權限與完整驗收 | 選做 | `projects-ansers/04-project-task-manager/stage-04/stage-04.md` |

## Stage 01：模組與路由骨架

- **目標**：先把整體模組邊界與路由架構定下來
- **要完成的功能**：專案區、任務區、設定區等基本頁面
- **會碰到的 Vue 3 重點**：Router、layout、模組拆分
- **驗收條件**：頁面切換與模組分區清楚
- **完成後建議自我檢查項目**：命名是否反映 domain、結構是否太深

## Stage 02：任務與專案資料流

- **目標**：建立專案與任務之間的基本關係
- **要完成的功能**：專案列表、任務列表、建立與編輯
- **會碰到的 Vue 3 重點**：CRUD、`computed`、表單處理
- **驗收條件**：資料能在多區塊間正確流動
- **完成後建議自我檢查項目**：資料來源是否集中、關係是否清楚

## Stage 03：共享邏輯與可重用元件

- **目標**：把重複流程抽成 composables 與可重用元件
- **要完成的功能**：通用表單、通用卡片、通用列表區塊
- **會碰到的 Vue 3 重點**：composables、slots、`provide / inject`
- **驗收條件**：重複程式碼下降，元件更容易組合
- **完成後建議自我檢查項目**：抽象是否有實際價值

## Stage 04：權限與完整驗收

- **目標**：補上登入、權限與完整驗收觀念
- **要完成的功能**：簡單登入、守衛、角色限制、流程驗證
- **會碰到的 Vue 3 重點**：Router guard、Pinia、條件渲染
- **驗收條件**：權限流程與頁面保護可以說清楚
- **完成後建議自我檢查項目**：是否還有過度設計
