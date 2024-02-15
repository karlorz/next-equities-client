import { expect, test } from '@playwright/test';

import { siteConfig } from '@/lib/constant';

test('has title', async ({ page }) => {
  await page.goto('/test_begin');

  await expect(page).toHaveTitle(siteConfig.title);
});
