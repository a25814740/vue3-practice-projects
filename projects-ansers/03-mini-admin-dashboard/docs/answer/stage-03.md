# Stage 03 答案：Pinia 與非同步流程

## 本階段目標

把共享狀態集中到 Pinia，並整理 loading、error 與空狀態流程。

## 建議實作方式

- 用 store 管理 domain 資料
- 讓頁面元件只關心展示與事件
- API 流程拆成可讀的步驟

## 關鍵 Vue 3 觀念說明

- Pinia 用於跨頁共享狀態
- 非同步流程要有狀態切換
- 空資料也是一種正常狀態

## 常見錯誤

- store 裡混入太多 UI 狀態
- 載入錯誤沒顯示給使用者
- API 呼叫與畫面邏輯糾纏

## 參考檔案切分方式

- `src/stores/users.store.ts`
- `src/composables/useUsers.ts`
- `src/views/UserListView.vue`

## 驗收重點

- store 分工清楚
- loading / error / empty 都能看見
- 資料流程可追蹤

## 可選優化方向

- 加入重試按鈕
- 加入快取概念

