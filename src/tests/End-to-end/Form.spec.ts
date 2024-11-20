import { test, expect } from '@playwright/test';

test('submits form successfully', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const validJson = JSON.stringify({
    type: 'object',
    properties: { name: { type: 'string' } },
    required: ['name'],
  });
  await page.fill('.monaco-editor textarea', validJson);

  await page.fill('input[name="name"]', 'John Doe');
  await page.click('button[type="submit"]');
  const successMessage = await page.locator('text=Form submitted!');
  expect(successMessage).toBeVisible();
});

test('shows validation errors for missing fields', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const validJson = JSON.stringify({
    type: 'object',
    properties: { name: { type: 'string' } },
    required: ['name'],
  });
  await page.fill('.monaco-editor textarea', validJson);

  await page.click('button[type="submit"]');
  const errorMessage = await page.locator('text=name is required');
  expect(errorMessage).toBeVisible();
});
