[![CI](../../actions/workflows/ci.yml/badge.svg)](../../actions/workflows/ci.yml)

# playwright-ci-starter

Minimal Playwright UI-test setup med GitHub Actions (CI) och HTML-report som artifact.

## Vad som ingår
- 2 st smoke-tester mot https://playwright.dev
- HTML-report (`playwright-report/`) genereras vid körning
- CI kör tester vid push och pull request och laddar upp report som artifact

## CI
- GitHub Actions kör Playwright-tester vid push och pull request.
- Tester körs i **Chromium och Firefox** (matrix).
- HTML-report + test-results laddas upp som artifacts.

## Kör lokalt
```bash
npm install
npx playwright install
npm test