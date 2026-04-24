# async-and-api

## 目標

理解非同步資料取得、loading / error / empty state 與重試思路。

## 何時使用

- 需要從假 API 或真 API 取資料時
- 需要等待狀態與錯誤處理時

## 常見錯誤

- 沒有處理 loading
- 錯誤訊息只有 `console.log`
- API 狀態直接和畫面寫死在一起

## 驗收標準

- 載入中、失敗、空資料都能顯示
- 資料流程有清楚切分
- 能說明何時重新抓資料

## 教學式實作方式

1. 先處理 loading
2. 再處理 error
3. 再處理 empty
4. 最後補重試與整理

