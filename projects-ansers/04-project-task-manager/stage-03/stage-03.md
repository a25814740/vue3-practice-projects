# Stage 03：共享邏輯與可重用元件

## 本階段目標

把重複流程抽成 composable 與可重用元件。

## 建議實作方式

- 抽表單邏輯
- 抽卡片元件
- 再讓頁面負責組合

## 關鍵 Vue 3 觀念

- composable 不是萬能箱
- slots 適合可替換內容
- `provide / inject` 適合區域共享

## 常見錯誤

- 抽象太早
- 回傳太多互不相關資料
- 元件名稱與責任不一致

## 參考檔案切分

- `src/App.vue`
- `src/composables/useTaskForm.ts`
- `src/components/BaseCard.vue`

## 驗收重點

- 重複程式碼下降
- 結構更好找
- 元件可重用

## 可選優化

- 驗證 composable
- 通知 composable
