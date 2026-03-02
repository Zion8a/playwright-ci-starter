import { test } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/PlaywrightHomePage';

test('homepage has correct title', async ({ page }) => {
  const home = new PlaywrightHomePage(page);
  await home.goto();
  await home.expectTitle();
});

test('get started link works', async ({ page }) => {
  const home = new PlaywrightHomePage(page);
  await home.goto();
  await home.clickGetStarted();
  await home.expectOnIntroPage();
});