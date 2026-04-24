# STAGE_CHECKLIST.md

## 專案目標

做出一個簡化版管理後台，練習頁面切換、資料流、CRUD 與共享狀態。

## 本專案會學到哪些 Vue 3 能力

- Router
- Pinia
- 表單處理
- CRUD
- `watch`
- loading / error / empty state
- 非同步流程

## 分階段列表

| Stage | 名稱 | 必做/選做 | 答案文件 |
| --- | --- | --- | --- |
| 01 | Router 與版型 | 必做 | `projects-ansers/03-mini-admin-dashboard/docs/answer/stage-01.md` |
| 02 | CRUD 主流程 | 必做 | `projects-ansers/03-mini-admin-dashboard/docs/answer/stage-02.md` |
| 03 | Pinia 與非同步流程 | 必做 | `projects-ansers/03-mini-admin-dashboard/docs/answer/stage-03.md` |
| 04 | 守衛與權限概念 | 選做 | `projects-ansers/03-mini-admin-dashboard/docs/answer/stage-04.md` |

## Stage 01：Router 與版型

- **目標**：建立管理後台的基本頁面切換與版型
- **要完成的功能**：首頁、列表頁、詳情頁、表單頁
- **會碰到的 Vue 3 重點**：Router、layout 元件、路由資料傳遞
- **驗收條件**：頁面切換正常，版型一致
- **完成後建議自我檢查項目**：路由名稱是否清楚、版型是否過度複雜

## Stage 02：CRUD 主流程

- **目標**：完成資料建立、更新、刪除與詳情查看
- **要完成的功能**：列表、詳情、編輯、新增、刪除
- **會碰到的 Vue 3 重點**：表單處理、`computed`、清單渲染
- **驗收條件**：CRUD 流程完整且資料一致
- **完成後建議自我檢查項目**：資料更新後畫面是否同步

## Stage 03：Pinia 與非同步流程

- **目標**：把共享狀態集中，並處理 API 流程
- **要完成的功能**：store 管理列表資料、讀取與錯誤處理
- **會碰到的 Vue 3 重點**：Pinia、`watch`、loading / error / empty state
- **驗收條件**：資料來源與狀態切分合理
- **完成後建議自我檢查項目**：store 是否只管該管的 domain

## Stage 04：守衛與權限概念

- **目標**：加入簡單的登入或角色概念
- **要完成的功能**：路由守衛、未登入導向、權限提示
- **會碰到的 Vue 3 重點**：Router guard、Pinia 狀態、條件渲染
- **驗收條件**：權限限制行為清楚，路由保護有效
- **完成後建議自我檢查項目**：權限規則是否簡單明確
