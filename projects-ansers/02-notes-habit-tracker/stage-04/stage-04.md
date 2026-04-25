# Stage 04：slots 與延伸優化

## 本階段目標

把可重用區塊做成 slots 元件，讓內容可以替換。

## 建議實作方式

- 先做簡單卡片元件
- 用 default slot 放內容
- 需要時再補 named slot

## 關鍵 Vue 3 觀念

- slots 是內容注入
- 元件責任要清楚
- 不要為了 slot 而 slot

## 常見錯誤

- 卡片元件做太大
- slot 太多導致難維護
- 抽象早於需求

## 參考檔案切分

- `src/App.vue`
- `src/components/BaseCard.vue`

## 驗收重點

- 卡片內容可以替換
- 結構更好維護
- 內容與外框分離

## 可選優化

- header slot
- footer slot
