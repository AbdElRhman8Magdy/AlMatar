import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  
  await page.goto('https://almatar.com/en/');
  await expect(page.locator('#ngb-nav-0')).toContainText('hotels');
  await expect(page.getByLabel('hotels', { exact: true }).locator('section').filter({ hasText: 'Going toCheck in27 May,' })).toBeVisible();
  await page.getByRole('combobox', { name: 'Destination or Hotel' }).click();
  await page.getByLabel('hotels', { exact: true }).getByText('Jeddah').click();await page.goto('https://almatar.com/en/');
  await page.getByRole('combobox', { name: 'Destination or Hotel' }).fill('asd');
  await page.getByText('27 May,').click();
  await page.getByLabel('hotels', { exact: true }).getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
  await page.getByText('1', { exact: true }).nth(2).click();
  await page.getByText('9', { exact: true }).nth(1).click();
  await page.getByText('Guest').click();
  await page.getByRole('list').filter({ hasText: '1' }).getByRole('button').nth(1).click();
  await page.getByRole('list').filter({ hasText: '0' }).getByRole('button').nth(1).click();
  await page.getByRole('list').filter({ hasText: '1' }).getByRole('button').nth(1).click();
  await page.locator('.override-select > .ng-select-container > .ng-arrow-wrapper').first().click();
  await page.getByText('15 years old').click();
  await page.getByRole('combobox').nth(2).click();
  await page.getByText('2 years old', { exact: true }).click();
  await page.getByRole('button', { name: 'Add room' }).click();
  await page.getByRole('list').filter({ hasText: '1' }).getByRole('button').nth(1).click();
  await page.getByText('2', { exact: true }).nth(3).click();
  await page.locator('div:nth-child(2) > .room-row > div > .passenger-dropdown__room-right-side > .passenger-control > .increase > .passenger-control__button').first().dblclick();
  await page.getByRole('list').filter({ hasText: '0' }).getByRole('button').nth(1).dblclick();
  // await page.getByRole('list').filter({ hasText: '6' }).dblclick();
  // await page.getByRole('list').filter({ hasText: '6' }).getByRole('button').first().dblclick();
  await page.locator('div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > .passenger-dropdown__room-right-side > .passenger-control > .increase > .increase-2').dblclick();
  await page.locator('div:nth-child(2) > div:nth-child(4) > .children-age__container > div > .children-age__item > .override-select > .ng-select-container > .ng-arrow-wrapper').first().click();
  await page.getByRole('option', { name: '3 years old', exact: true }).click();
  await page.locator('div:nth-child(2) > div:nth-child(4) > .children-age__container > div:nth-child(2) > .children-age__item > .override-select > .ng-select-container > .ng-value-container > .ng-input').click();
  await page.getByText('5 years old', { exact: true }).click();
  await page.locator('div:nth-child(3) > .children-age__item > .override-select > .ng-select-container > .ng-arrow-wrapper').click();
  await page.getByText('12 years old').click();
  await page.locator('div:nth-child(4) > .children-age__item > .override-select > .ng-select-container > .ng-arrow-wrapper').click();
  await page.getByRole('option', { name: '1 years old', exact: true }).click();
  await page.getByRole('button', { name: 'Apply' }).click();
  await page.getByRole('button', { name: 'Search Hotels' }).click();
  await expect(page.locator('form[name="searchHotels"]')).toContainText('12 Guest · 2 Rooms');
  await page.getByRole('slider').nth(1).click();
  await page.getByRole('slider').nth(1).click();
  await page.getByLabel('Price range Includes taxes &').locator('div').filter({ hasText: '24,807' }).nth(3).click();
  await page.getByRole('slider').nth(1).click();
  await page.getByRole('slider').nth(1).click();
  await page.locator('.noUi-connect').click();
  await page.getByLabel('Price range Includes taxes &').locator('div').filter({ hasText: '92,514' }).nth(3).click();
  await page.getByRole('slider').first().click();
  await page.locator('.noUi-connect').click();
  await page.locator('.noUi-connects').click();

  
});