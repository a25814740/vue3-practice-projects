# Stage 03 答案：本地儲存與拆分

## 本階段目標

讓資料可以保存到本地，並把畫面拆成更好維護的小元件。

## 建議實作方式

- 用 `watch` 監聽 Todo 變化
- 在初始化時從 localStorage 讀資料
- 把顯示與操作拆開

## 關鍵 Vue 3 觀念說明

- `watch` 適合處理同步副作用
- 生命週期可用來初始化資料
- props / emits 是元件分工的基礎

## 常見錯誤

- 直接在多個地方讀寫 localStorage
- 把副作用塞進 computed
- 元件拆了但責任沒有變清楚

## 參考檔案切分方式

- `src/App.vue`
- `src/components/TodoForm.vue`
- `src/components/TodoList.vue`
- `src/composables/useTodoStorage.ts`

## 驗收重點

- 重新整理後資料仍存在
- 元件分工清楚
- 儲存邏輯集中

## 可選優化方向

- 加入清空已完成
- 加入 Todo 統計數字

