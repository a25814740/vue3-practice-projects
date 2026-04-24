# pinia

## 目標

理解什麼狀態該放 store、如何拆 store、如何讓元件與 store 分工。

## 何時使用

- 多個元件共用狀態
- 跨頁保留資料
- 需要集中管理 domain state

## 常見錯誤

- 什麼都放 store
- store 變成大雜燴
- 把 UI 狀態和 domain 狀態混在一起

## 驗收標準

- 能說明為什麼用 store
- 能把 store 維持在單一 domain
- 能清楚區分局部狀態與共享狀態

## 教學式實作方式

1. 先用局部狀態
2. 確認真的需要共享再上 store
3. 用最小 store 處理單一 domain

