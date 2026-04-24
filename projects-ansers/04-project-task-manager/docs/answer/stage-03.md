# Stage 03 答案：共享邏輯與可重用元件

## 本階段目標

把重複流程抽出來，讓整體結構更乾淨。

## 建議實作方式

- 抽表單 composable
- 抽列表 composable
- 抽共用卡片與區塊元件

## 關鍵 Vue 3 觀念說明

- composable 不是萬能箱
- slots 適合用在內容可替換的元件
- `provide / inject` 適合區域共享，不適合亂擴散

## 常見錯誤

- 抽象太早
- 回傳太多互不相關的資料
- 元件名稱與責任不一致

## 參考檔案切分方式

- `src/composables/useTaskForm.ts`
- `src/components/BaseCard.vue`
- `src/components/BaseListSection.vue`

## 驗收重點

- 重複程式碼下降
- 元件重用性提升
- 邏輯更好找

## 可選優化方向

- 加入表單驗證 composable
- 加入通知 composable

