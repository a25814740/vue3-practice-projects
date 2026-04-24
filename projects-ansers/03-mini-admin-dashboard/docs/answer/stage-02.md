# Stage 02 答案：CRUD 主流程

## 本階段目標

完成管理後台最核心的資料操作流程。

## 建議實作方式

- 先做列表
- 再做建立與編輯
- 最後補詳情與刪除

## 關鍵 Vue 3 觀念說明

- 表單狀態要獨立管理
- 列表資料要維持單一來源
- CRUD 要有一致回饋

## 常見錯誤

- 新增與編輯共用太多模糊邏輯
- 刪除後畫面沒有更新
- 詳情頁資料來源不明

## 參考檔案切分方式

- `src/views/UserListView.vue`
- `src/views/UserFormView.vue`
- `src/views/UserDetailView.vue`
- `src/components/UserTable.vue`

## 驗收重點

- 可以新增、編輯、刪除
- 詳情頁能正確顯示
- 清單會同步變動

## 可選優化方向

- 加入確認刪除
- 加入排序與搜尋

