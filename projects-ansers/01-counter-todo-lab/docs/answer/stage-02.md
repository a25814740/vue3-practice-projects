# Stage 02 答案：Todo 與篩選

## 本階段目標

把輸入、清單與篩選結合起來，完成最基本的 Todo 互動。

## 建議實作方式

- 用陣列存 Todo 資料
- 用表單新增項目
- 用 computed 做篩選結果

## 關鍵 Vue 3 觀念說明

- `v-model` 處理表單
- `computed` 負責衍生資料
- `v-for` 與 `key` 是清單穩定性的基礎

## 常見錯誤

- 直接改模板裡的資料結構
- 篩選邏輯散落在多個地方
- 沒有空狀態，畫面看起來像壞掉

## 參考檔案切分方式

- `src/App.vue`
- `src/components/TodoForm.vue`
- `src/components/TodoList.vue`

## 驗收重點

- 可以新增 Todo
- 可以切換完成狀態
- 可以依條件篩選

## 可選優化方向

- 加入刪除按鈕
- 加入字數限制

