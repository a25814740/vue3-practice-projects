# FILE_STRUCTURE.md

## 倉庫標準結構

```text
/
├─ README.md
├─ AGENTS.md
├─ TASK.md
├─ PROJECT_RULES.md
├─ SKILLS.md
├─ docs/
├─ skills/
└─ projects/
```

## 子專案標準結構

```text
project-name/
├─ README.md
├─ package.json
├─ public/
├─ src/
└─ docs/
   ├─ STAGE_CHECKLIST.md
   ├─ REQUIREMENTS.md
   ├─ ROADMAP.md
   └─ optionally-more-docs.md
```

## 答案放置結構

```text
projects-ansers/
└─ project-name/
   └─ docs/
      └─ answer/
         ├─ stage-01.md
         ├─ stage-02.md
         └─ ...
```

## 結構原則

- 文件放在 `docs/`
- 答案放在 `docs/answer/`
- 程式碼放在 `src/`
- 靜態資源放在 `public/`
- 每個子專案都要能單獨理解，不依賴整個倉庫上下文
