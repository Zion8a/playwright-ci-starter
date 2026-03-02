[![CI](../../actions/workflows/ci.yml/badge.svg)](../../actions/workflows/ci.yml)

# playwright-ci-starter

Minimal Playwright UI-test setup med GitHub Actions (CI), cross-browser (Chromium + Firefox) och artifacts (HTML-report + test-results).

📌 Se även: [PORTFOLIO.md](PORTFOLIO.md)

## Vad som ingår
- Smoke-tester mot https://playwright.dev (Playwright Test)
- Page Object Model (POM) för bättre struktur
- HTML-report (`playwright-report/`) genereras vid körning
- Test-results (`test-results/`) innehåller t.ex. screenshot/video vid fail
- CI kör vid push och pull request och laddar upp artifacts per browser

## CI
- GitHub Actions kör Playwright-tester vid push och pull request.
- Tester körs i **Chromium och Firefox** (matrix).
- Artifacts laddas upp: **playwright-report-\<browser\>** och **test-results-\<browser\>**.

## Kör lokalt
> PowerShell-tips: om `npm` blockas, kör `npm.cmd`.

```bash
npm install
npx playwright install
npm test