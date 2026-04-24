# SKILLS.md

這份文件是本倉庫的技能總表，讓 AI Agent 快速判斷：

- 要練什麼
- 何時會用到
- 前置能力是什麼
- 對應哪幾個子專案
- 哪些 stage 會第一次出現

## 技能總表

| 技能 | 用途 | 對應專案 | 首次出現 Stage | 前置技能 |
| --- | --- | --- | --- | --- |
| Vue 3 基礎 | 元件、響應式、模板語法 | 全部 | 01-01 | 無 |
| Composition API | `ref`、`reactive`、`computed` | 全部 | 01-01 | Vue 3 基礎 |
| 表單與事件 | 輸入、提交、雙向綁定 | 01、02、03、04 | 01-02 | Vue 3 基礎 |
| 清單與條件渲染 | `v-for`、`v-if`、空狀態 | 全部 | 01-02 | Vue 3 基礎 |
| watch 與副作用 | 自動同步、狀態追蹤 | 01、02、03、04 | 02-01 | Composition API |
| composables | 抽出可重用邏輯 | 02、03、04 | 02-03 | Composition API |
| Router | 分頁、導覽、守衛概念 | 03、04 | 03-01 | Vue 3 基礎 |
| Pinia | 跨頁共享狀態 | 03、04 | 03-02 | Vue 3 基礎 |
| CRUD 模式 | 建立、編輯、刪除、列表 | 02、03、04 | 03-02 | 表單與事件 |
| API 與非同步 | loading、error、empty state | 03、04 | 03-03 | watch 與副作用 |
| provide / inject | 區域共享、依賴注入 | 02、04 | 02-03 | Composition API |
| slots | 可擴充元件設計 | 02、04 | 02-04 | 元件拆分 |
| 動態元件 | 可切換的內容呈現 | 04 | 04-02 | 元件拆分 |
| 權限與守衛 | 路由保護、角色概念 | 04 | 04-04 | Router、Pinia |
| 測試觀念 | 驗收、回歸、基礎測試 | 03、04 | 03-04 | Vue 3 基礎 |

## 技能文件索引

- `skills/project-planning.md`
- `skills/vue3-fundamentals.md`
- `skills/composition-api.md`
- `skills/vue-router.md`
- `skills/pinia.md`
- `skills/forms-and-validation.md`
- `skills/async-and-api.md`
- `skills/crud-patterns.md`
- `skills/code-review-checklist.md`
- `skills/stage-completion-checklist.md`

