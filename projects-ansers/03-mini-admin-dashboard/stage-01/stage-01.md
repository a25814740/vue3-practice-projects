# Stage 01：Router 與版型

## 本階段目標

先把頁面結構與導覽骨架建立起來。

## 建議實作方式

- 先做最少頁面
- 先做 layout，再放內容
- 路由名稱保持一致

## 關鍵 Vue 3 觀念

- Router 管頁面切換
- layout 管版型
- route params 與 query 要分開看

## 常見錯誤

- 路由和資料邏輯混在一起
- layout 變成巨型元件
- 頁面命名不清楚

## 參考檔案切分

- `src/App.vue`
- `src/router/index.ts`
- `src/layouts/AdminLayout.vue`

## 驗收重點

- 頁面可切換
- 版型一致
- 結構能擴充

## 可選優化

- 側邊欄
- breadcrumb
