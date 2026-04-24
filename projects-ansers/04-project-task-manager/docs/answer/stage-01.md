# Stage 01 答案：模組與路由骨架

## 本階段目標

先建立明確的模組邊界與路由骨架，避免後面越做越亂。

## 建議實作方式

- 先畫 domain 分區
- 再切路由
- 先做骨架，再補內容

## 關鍵 Vue 3 觀念說明

- 先有清楚結構，再談複雜資料流
- 路由應該對應使用者任務
- layout 與功能頁面要分開

## 常見錯誤

- 一開始就把頁面做太深
- 模組邊界不清楚
- 路由與功能耦合太緊

## 參考檔案切分方式

- `src/layouts/WorkspaceLayout.vue`
- `src/router/index.ts`
- `src/views/ProjectsView.vue`
- `src/views/TasksView.vue`

## 驗收重點

- 路由骨架清楚
- 模組分區看得懂
- 後續好擴充

## 可選優化方向

- 加入側邊導覽
- 加入麵包屑

