# PROJECT_RULES.md

## 核心原則

- 以 Vue 3 教學與可讀性優先
- 先能理解，再談最佳化
- 不要過度炫技
- 不要引入過重依賴
- 每個 stage 都要能獨立驗收
- 以小步前進為主，不要一次大改整個倉庫

## 命名規則

- 專案資料夾使用 `kebab-case`
- 元件檔名使用 `PascalCase.vue`
- composable 使用 `useXxx.ts`
- store 使用 `xxx.store.ts`
- 測試檔使用 `*.spec.ts`
- 文件使用 `UPPER_SNAKE_CASE.md` 或 `kebab-case.md`，同一層盡量一致

## 元件規則

- 一個元件只負責一件事
- 能拆就拆，不要把所有邏輯塞進單一頁面
- props 與 emits 要明確定義
- 優先使用 slots 做可擴充區塊
- 過於通用的邏輯抽成 composable

## composables 使用原則

- 只抽可重用、可描述清楚的狀態或流程
- 不要為了抽象而抽象
- composable 只負責資料與行為，不負責 UI

## store 使用原則

- 只有跨元件共享狀態才上 store
- 單頁內局部狀態先用 `ref` / `reactive`
- store 要有明確 domain，不要變成大雜燴

## router 使用原則

- 先分頁，再分模組
- 路由命名要能看出用途
- 路由守衛只做必要判斷
- 權限概念先文檔化，再逐步實作

## 驗收原則

- 每個 stage 都要有明確驗收條件
- 文件中的答案要能對照實作
- 若尚未實作功能，就明確標示為後續 stage

## 變更原則

- 先改文件，再改骨架，再改實作
- 若命名或結構改動，先同步更新總覽文件
- 若新增技能，先更新 `SKILLS.md` 與對應 skills 文件

