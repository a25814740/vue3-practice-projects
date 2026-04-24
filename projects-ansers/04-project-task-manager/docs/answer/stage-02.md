# Stage 02 答案：任務與專案資料流

## 本階段目標

把專案與任務的關係建立起來，完成基礎資料流。

## 建議實作方式

- 先定義資料關聯
- 再做列表與編輯
- 先完成主流程，再加細節

## 關鍵 Vue 3 觀念說明

- 關聯資料要有一致來源
- 表單與列表應該分責任
- `computed` 可協助整理關聯結果

## 常見錯誤

- 專案與任務資料互相污染
- 編輯流程過度分散
- 直接在模板裡寫複雜邏輯

## 參考檔案切分方式

- `src/views/ProjectsView.vue`
- `src/views/ProjectDetailView.vue`
- `src/views/TaskEditorView.vue`
- `src/components/TaskList.vue`

## 驗收重點

- 資料關聯清楚
- 可以建立與更新
- 列表同步正確

## 可選優化方向

- 加入狀態標籤
- 加入搜尋條件

