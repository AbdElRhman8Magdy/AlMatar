import { APIRequestContext, BrowserContext, expect, Page } from '@playwright/test';

export default class HomePage {
  private page: Page;
  private request?: APIRequestContext;
  private context?: BrowserContext;

  constructor(page: Page, request?: APIRequestContext, context?: BrowserContext) {
    this.page = page;
    this.request = request;
    this.context = context;
  }

  private get HomeHeader() {
    return this.page.getByText('المطار، صديقك في السفر');
  }

  private get HotelsSelected() {
    return this.page.getByRole('tab', { name: ' فنادق ', exact: true });
  }

  private get DestinationHotelInput() {
    return this.page.getByRole('combobox', { name: 'الوجهة أو الفندق' });
  }

  private get DestinationSelect() {
    return this.page.getByRole('option', { name: 'Catalonia Port Barcelona, Spain' });
  }

  private get CheckInDates() {
    return this.page.getByText('موعد الوصول');
  }

  private get NextMonthBTN() {
    return this.page.getByLabel('فنادق', { exact: true }).getByRole('button').filter({ hasText: /^$/ }).nth(1);
  }

  private get InDate() {
    return this.page.getByText('10', { exact: true }).nth(1);
  }

  private get OutDate() {
    return this.page.getByText('17', { exact: true }).nth(1);
  }

  private get GuestRoomSelect() {
    return this.page.locator('.search__passengers-dropdown');
  }

  private get AdultIncr() {
    return this.page.locator('[name="searchHotels"]').locator('[name="plus"]').first();
  }

  private get ConfirmGuestBTN() {
    return this.page.getByRole('button', { name: 'تطبيق' });
  }

  private get BackGround() {
    return this.page.getByRole('navigation');
  }

  private get ConfirmSearchBTN() {
    return this.page.getByRole('button', { name: 'ابحث عن الفنادق' });
  }

  private get FlightSection() {
    return this.page.getByRole('tab', { name: 'طيران' });
  }

  private get FlightFrom() {
    return this.page.getByRole('combobox', { name: 'مدينة المغادرة' });
  }

  private get FlightTo() {
    return this.page.getByRole('combobox', { name: 'الوجهة' });
  }

  private get FlightToggle() {
    return this.page.locator('.almatar-flight-search__toggle');
  }

  private get FlightDate() {
    return this.page.getByText('تاريخ المغادرة');
  }

  private get FlightNextMonth() {
    return this.page.getByLabel('طيران').getByRole('button').filter({ hasText: /^$/ }).nth(1);
  }

  private get FlighClassSelect() {
    return this.page.locator('span').filter({ hasText: 'الدرجة السياحية' }).first();
  }

  private get FlightfrSTClass() {
    return this.page.getByText('الدرجة الأولى');
  }

  private get FlightBackGround() {
    return this.page.locator('form[name="flightsSearch"]');
  }

  private get ConfirmSearchFlightBTN() {
    return this.page.getByRole('button', { name: 'بحث عن رحلات' });
  }

  async load() {
    await this.page.goto('ar/');
  }

  async HomeLoad() {
    await expect(this.HomeHeader).toContainText('المطار، صديقك في السفر');
    await expect(this.HotelsSelected).toContainText('فنادق');
    await this.DestinationHotelInput.click();
    await this.DestinationHotelInput.clear();
    await this.DestinationHotelInput.fill('Barcelona, Catalonia, Spain');
    await this.page.keyboard.press('Enter');
  }

  async HotelsDates() {
    await this.CheckInDates.click();
    await this.NextMonthBTN.click();
    await this.InDate.click();
    await this.OutDate.click();
  }

  async Guest() {
    await this.GuestRoomSelect.click();
    await this.AdultIncr.click();
    await this.ConfirmGuestBTN.click();
    await this.BackGround.click({ position: { x: 0, y: 0 } });
    await this.ConfirmSearchBTN.click({ force: true });
    await this.page.waitForLoadState('networkidle');
  }
  async FlightSeclection() {
    await this.FlightSection.click();
    await this.FlightFrom.click();
    await this.FlightFrom.clear();
    await this.FlightFrom.fill('Spain');
    await this.page.keyboard.press('Enter');
    await this.FlightTo.click();
    await this.FlightTo.clear();
    await this.FlightTo.fill('Riyadh');
    await this.page.keyboard.press('Enter');
    await this.FlightDate.click();
    await this.FlightNextMonth.click();
    await this.InDate.click();
    await this.OutDate.click();
    await this.FlightToggle.click();
    await this.FlighClassSelect.click();
    await this.FlightfrSTClass.click();
    await this.FlightBackGround.click({ position: { x: 0, y: 0 } });
    await this.ConfirmSearchFlightBTN.click({ force: true });
    await this.page.waitForLoadState('networkidle');
  }
   
}
