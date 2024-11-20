import { test, expect } from '@playwright/test';

test('displays error for invalid JSON', async ({ page }) => {
  await page.goto('http://localhost:3000'); 
  await page.fill('.monaco-editor textarea', '{ invalid json }');
  const errorMessage = await page.locator('text=Invalid JSON');
  expect(errorMessage).toBeVisible();
});

test('updates form preview on valid JSON', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const validJson = JSON.stringify({
    type: 'object',
    properties: { name: { type: 'string' } },
  });
  await page.fill('.monaco-editor textarea', validJson);
  const formField = await page.locator('input[name="name"]');
  expect(formField).toBeVisible();
});
