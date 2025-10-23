import { APIRequestContext, BrowserContext, expect, Page } from '@playwright/test';

export default class HotelSearchPage {
  private page: Page;
  private request?: APIRequestContext;
  private context?: BrowserContext;

  constructor(page: Page, request?: APIRequestContext, context?: BrowserContext) {
    this.page = page;
    this.request = request;
    this.context = context;
  }

  private get Price() {
    return this.page.getByRole('tab', { name: 'نطاق السعر شامل الضريبة والخدمات' });
  }

  async HotelsDetails() {
    await expect(this.Price).toContainText('نطاق السعر شامل الضريبة والخدمات');
  }
}
