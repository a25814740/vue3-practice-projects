# Stage 04 答案：slots 與延伸優化

## 本階段目標

讓卡片與區塊元件具備可插入內容的能力，提升彈性。

## 建議實作方式

- 將共用區塊包成元件
- 用 default slot 放主要內容
- 需要時再補 named slot

## 關鍵 Vue 3 觀念說明

- slots 用來做內容注入
- 元件責任要先清楚，再談可擴充
- 不需要所有元件都用 slots

## 常見錯誤

- 為了能用 slot 而強行抽元件
- slot 太多導致元件難維護
- 名稱不清楚讓使用者看不懂

## 參考檔案切分方式

- `src/components/BaseCard.vue`
- `src/components/BaseSection.vue`
- `src/App.vue`

## 驗收重點

- slot 可正常替換內容
- 元件責任清楚
- 畫面結構更好維護

## 可選優化方向

- 加入空狀態 slot
- 加入 header / footer slot

