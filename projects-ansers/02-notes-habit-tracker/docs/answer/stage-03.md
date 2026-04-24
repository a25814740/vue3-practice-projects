# Stage 03 答案：composables 與共享邏輯

## 本階段目標

把重複邏輯抽成 composables，讓資料流程更乾淨。

## 建議實作方式

- 把儲存流程拆出去
- 把過濾流程拆出去
- 只保留頁面需要的最小邏輯

## 關鍵 Vue 3 觀念說明

- composable 不是元件
- composable 只負責資料與行為
- `provide / inject` 適合區域共享

## 常見錯誤

- 抽成 composable 但內容太小，沒有價值
- composable 回傳過多狀態
- `provide / inject` 被濫用成全域狀態

## 參考檔案切分方式

- `src/composables/useEntries.ts`
- `src/composables/useFilters.ts`
- `src/App.vue`

## 驗收重點

- 重複邏輯變少
- 狀態管理更清楚
- 元件可讀性提升

## 可選優化方向

- 抽出通知系統
- 抽出日期格式工具

