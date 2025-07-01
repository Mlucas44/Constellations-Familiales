import { test, expect } from '@playwright/test';

test.describe('Section Carrière – bouton “Voir plus”', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('toggle du texte caché et disparition du bouton', async ({ page }) => {
    const seeMore = page.getByRole('button', { name: 'Voir plus' });

    await expect(page.locator('.career__text--hidden')).toBeHidden();

    await seeMore.click();

    await expect(page.locator('.career__text--visible-inline')).toBeVisible();

    await expect(seeMore).toBeHidden();
  });
});
