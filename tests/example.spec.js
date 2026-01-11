// @ts-check
import { test, expect } from '@playwright/test';
import { HomePage} from '../Pages/HomePage';

test('get started link', async ({ page }) => {
  const homePage = new HomePage(page);
 await homePage.navigateToLoginPage();
});
