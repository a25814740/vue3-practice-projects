# Stage 03：Pinia 與非同步流程

## 本階段目標

把共享狀態集中，並補上 loading、error、empty state。

## 建議實作方式

- 用 store 管 domain 資料
- 頁面只負責展示與觸發
- API 狀態要分清楚

## 關鍵 Vue 3 觀念

- Pinia 管跨頁共享
- 非同步流程要有狀態
- 空資料也是正常狀態

## 常見錯誤

- store 混太多 UI 狀態
- 錯誤只印 console
- API 和畫面耦太緊

## 參考檔案切分

- `src/App.vue`
- `src/stores/users.store.ts`

## 驗收重點

- loading 有顯示
- error 有顯示
- 資料來源集中

## 可選優化

- 重試
- 快取
