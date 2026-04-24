# IMPLEMENTATION_STRATEGY.md

## 實作策略

這個倉庫採用 **文件先行、骨架先行、實作漸進** 的方式。

### 階段 A：倉庫基礎

- 建立總文件
- 建立 skills 文件
- 建立子專案骨架
- 建立 stage 規格與答案模板

### 階段 B：入門專案

- 先做 `01-counter-todo-lab`
- 以最小功能完成可驗收版本
- 把 `ref`、`reactive`、`computed`、`v-model` 練穩

### 階段 C：遞進專案

- 再進入 `02-notes-habit-tracker`
- 接著做 `03-mini-admin-dashboard`
- 最後做 `04-project-task-manager`

## AI Agent 實作順序

1. 讀總覽文件
2. 讀對應 skills
3. 讀 stage checklist
4. 讀 `projects-ansers/` 裡對應的 answer 文件
5. 再開始修改程式碼

## 驗收方式

- 每個 stage 都要有獨立檢查項目
- 每次完成後更新 `docs/PROGRESS.md`
- 若牽涉到整體方向，先同步更新總覽文件
