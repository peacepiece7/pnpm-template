# cypress

`pnpm -w -D cypress`

스크립트는 약어로 만들기 (cypress 충돌 방지)

```json
{
  "scripts": {
    "cy:open": "cypress open"
  }
}
```

tsconfing.json은 inlineSourceMap: true 여야함.

`./cypress/tsconfig.json` 생성하고 `/tsconfig.e2e.json` extend하기

```json
{
  "extends": "../../../tsconfig.e2e.json"
}
```

## 타입 오류 나면 설치 하기

https://github.com/cypress-io/eslint-plugin-cypress
