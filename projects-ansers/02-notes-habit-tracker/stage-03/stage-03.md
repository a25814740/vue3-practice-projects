# Stage 03：composables 與共享邏輯

## 本階段目標

把重複邏輯抽成 composable，讓頁面只保留展示與操作。

## 建議實作方式

- 先把資料邏輯抽出來
- 再讓頁面元件負責畫面
- 共享狀態要有明確邊界

## 關鍵 Vue 3 觀念

- composable 只負責資料與行為
- `provide / inject` 適合區域共享
- 抽象要有實際重用價值

## 常見錯誤

- composable 太大包
- 抽了但沒重用
- 共享狀態變成亂流

## 參考檔案切分

- `src/App.vue`
- `src/composables/useEntries.ts`

## 驗收重點

- 重複程式碼變少
- 頁面更乾淨
- 邏輯集中

## 可選優化

- 加入過濾條件
- 加入提示訊息
