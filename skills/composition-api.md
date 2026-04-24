# composition-api

## 目標

掌握 `ref`、`reactive`、`computed`、`watch`、`watchEffect` 與 lifecycle hooks 的基本使用。

## 何時使用

- 需要處理響應式資料
- 需要同步衍生狀態
- 需要追蹤副作用時

## 常見錯誤

- `computed` 裡放副作用
- `watch` 用來做本來可以直接算出的事情
- composable 回傳過多不相關內容

## 驗收標準

- 能正確區分衍生資料與副作用
- 能把複雜邏輯抽成 composable
- 能解釋為什麼需要某個 lifecycle hook

## 教學式實作方式

1. 先定義 state
2. 再做衍生資料
3. 再加 watcher
4. 最後抽出重複邏輯

