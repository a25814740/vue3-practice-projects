# Stage 02 答案：編輯與統計

## 本階段目標

讓資料可以編輯、刪除，並同步顯示統計資訊。

## 建議實作方式

- 編輯時使用單獨表單狀態
- 統計資訊用 computed 計算
- 先做基本資料更新，再整理畫面

## 關鍵 Vue 3 觀念說明

- `computed` 是衍生資料最佳選擇
- `watch` 可用來處理同步或紀錄副作用
- 表單模式與展示模式要分清楚

## 常見錯誤

- 把編輯狀態與新增狀態混在一起
- 統計資料手動重複維護
- 刪除流程沒有明確回饋

## 參考檔案切分方式

- `src/App.vue`
- `src/components/EntryForm.vue`
- `src/components/EntryList.vue`
- `src/components/StatsPanel.vue`

## 驗收重點

- 編輯功能可用
- 刪除功能可用
- 統計會跟著資料變動

## 可選優化方向

- 加入搜尋
- 加入排序

