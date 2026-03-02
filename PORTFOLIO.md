# Portfolio – playwright-ci-starter

## Vad detta repo visar
- UI-testautomation med Playwright
- Page Object Model (POM) för bättre struktur och återanvändbara actions
- CI i GitHub Actions (push/PR)
- Cross-browser-körning (Chromium + Firefox)
- Artifacts för felsökning: HTML report + test-results (screenshot/video/trace vid fail)

## Snabb demo
1) Push en ändring → CI triggas (Chromium + Firefox)
2) Öppna Actions och välj senaste körningen
3) Vid fail: ladda ner artifacts (playwright-report-<browser> och test-results-<browser>)
4) Öppna `playwright-report/index.html` lokalt för en tydlig felrapport