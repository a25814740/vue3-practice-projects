# Stage 01 答案：Router 與版型

## 本階段目標

先把頁面架構定好，讓後續 CRUD 有穩定的基礎。

## 建議實作方式

- 先建立最少頁面
- 先做 layout，再放頁面內容
- 路由名稱保持簡單一致

## 關鍵 Vue 3 觀念說明

- Router 負責頁面切換，不負責資料業務
- layout 元件可以共享版型
- route params 與 query 要分清楚

## 常見錯誤

- 路由與資料邏輯混在一起
- layout 變成巨型元件
- 命名不一致導致後續維護困難

## 參考檔案切分方式

- `src/App.vue`
- `src/layouts/AdminLayout.vue`
- `src/router/index.ts`
- `src/views/UserListView.vue`
- `src/views/UserDetailView.vue`

## 驗收重點

- 頁面切換順暢
- 版型一致
- 路由結構清楚

## 可選優化方向

- 加入側邊欄導覽
- 加入 breadcrumb

