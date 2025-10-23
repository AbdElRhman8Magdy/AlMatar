import { APIRequestContext, BrowserContext, expect, Page } from '@playwright/test';

export default class FlightSearchPage {
  private page: Page;
  private request?: APIRequestContext;
  private context?: BrowserContext;

  constructor(page: Page, request?: APIRequestContext, context?: BrowserContext) {
    this.page = page;
    this.request = request;
    this.context = context;
  }

  private get FlightTime() {
    return this.page.getByText('وقت السفر');
  }

  async FlightsDetails() {
    await expect(this.FlightTime).toContainText('وقت السفر');
  }
}
