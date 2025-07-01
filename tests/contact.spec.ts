// tests/contact.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Section Contact – responsive, bouton & formulaire', () => {
  test.beforeEach(async ({ page }) => {
    // 1) Stub du reCAPTCHA avant que la page ne charge quoi que ce soit
    await page.addInitScript(() => {
      // @ts-ignore
      window.grecaptcha = {
        ready(cb: any) { cb(); },
        render(el: any, opts: any) { opts.callback('fake-token'); }
      };
    });

    // 2) Stub de l’API d’envoi
    await page.route('**/api/send', route =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true })
      })
    );

    // 3) Navigue sur ta page unique
    await page.goto('http://localhost:3000/');
  });

  test('les champs et le bouton Envoyer sont visibles', async ({ page }) => {
    // on utilise getByPlaceholder et getByRole pour être sûr·e de matcher
    await expect(page.getByPlaceholder('Nom')).toBeVisible();
    await expect(page.getByPlaceholder('Email')).toBeVisible();
    await expect(page.getByPlaceholder('Objet')).toBeVisible();
    await expect(page.getByPlaceholder('Message')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Envoyer' })).toBeVisible();
  });

  test('remplissage, clic sur Envoyer, alert et vidage des champs', async ({ page }) => {
    // Remplissage
    await page.fill('input[placeholder="Nom"]', 'Jean Dupont');
    await page.fill('input[placeholder="Email"]', 'jean@mail.com');
    await page.fill('input[placeholder="Objet"]', 'Sujet Test');
    await page.fill('textarea[placeholder="Message"]', 'Bonjour !');

    // On prépare l’écoute de l’alert
    const dialogPromise = page.waitForEvent('dialog');

    // Clic sur le bouton (match par rôle et libellé)
    await page.getByRole('button', { name: 'Envoyer' }).click();

    // On récupère et on valide le dialog
    const dialog = await dialogPromise;
    expect(dialog.message()).toContain('Message envoyé avec succès');
    await dialog.accept();

    // Vérifie que les champs sont vidés
    for (const ph of ['Nom', 'Email', 'Objet']) {
      expect(await page.getByPlaceholder(ph).inputValue()).toBe('');
    }
    expect(await page.getByPlaceholder('Message').inputValue()).toBe('');
  });
});
