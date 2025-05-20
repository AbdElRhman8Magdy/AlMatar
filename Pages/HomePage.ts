import { APIRequestContext, BrowserContext, expect, Page } from "@playwright/test";

import Config   from '../playwright.config'
import { config } from "process";

export default class HomePage{
    // getByRole(arg0: string, arg1: { name: string; }) {
    //     throw new Error("Method not implemented.");
    // }
    private page:Page;
    private request?:APIRequestContext;
    private context?:BrowserContext;
    constructor(page:Page,requst?:APIRequestContext,context?:BrowserContext){
        this.page=page;
        this.request=requst;
        this.context=context
    }


    
    
    private get HomeHeader(){
        return this.page.getByText('المطار، صديقك في السفر')
    }
    private get HotelsSelected(){
        return this.page.getByRole('tab', { name: ' فنادق ', exact: true })
    }
     private get DestinationHotelInput(){
        return this.page.getByRole('combobox', { name: 'الوجهة أو الفندق' })
    }
    //  private get DestinationSelect(){
    //     return this.page.locator('div').filter({ hasText:"Spain"}).nth(1)
    // }
    private get DestinationSelect(){
        return this.page.getByRole('option', { name: 'Catalonia Port Barcelona, Spain' })
    }
     private get CheckInDates(){
        return this.page.getByText('موعد الوصول')
    }
    private get NextMonthBTN(){
        return this.page.getByLabel('فنادق', { exact: true }).getByRole('button').filter({ hasText: /^$/ }).nth(1)
    }
    private get InDate(){
        return this.page.getByText('10', { exact: true }).nth(1)
    }
    private get OutDate(){
        return this.page.getByText('17', { exact: true }).nth(1)
    }
    private get GuestRoomSelect(){
        return this.page.locator('.search__passengers-dropdown')
    }
    // private get AdultIncr(){
    //     return this.page.getByText('Adult').locator('[class="increase passenger-control__item"]')
    // }
    private get AdultIncr(){
        return this.page.locator(`[name="searchHotels"]`).locator(`[name="plus"]`).first()
    }
    private get ConfirmGuestBTN(){
        return this.page.getByRole('button', { name: 'تطبيق' })
    }
    private get BackGround(){
        return this.page.getByRole('navigation')
    }
    private get ConfirmSearchBTN(){
        return this.page.getByRole('button', { name: 'ابحث عن الفنادق' })
    }
    private get FlightSection(){
        return this.page.getByRole('tab', { name: 'طيران' })
    }
    private get FlightFrom(){
        return this.page.getByRole('combobox', { name: 'مدينة المغادرة' })
    }
    private get FlightTo(){
        return this.page.getByRole('combobox', { name: 'الوجهة' })
    }
    private get FlightToggle(){
        return this.page.locator('.almatar-flight-search__toggle')
    }
    private get FlightDate(){
        return this.page.getByText('تاريخ المغادرة')
    }
    private get FlightNextMonth(){
        return this.page.getByLabel('طيران').getByRole('button').filter({ hasText: /^$/ }).nth(1)
    }
    private get FlighClassSelect(){
        return this.page.locator('span').filter({ hasText: 'الدرجة السياحية' }).first()
    }
    private get FlightfrSTClass(){
        return this.page.getByText('الدرجة الأولى')
    }
    private get FlightBackGround(){
        return this.page.locator('form[name="flightsSearch"]')
    }
    private get ConfirmSearchFlightBTN(){
        return this.page.getByRole('button', { name: 'بحث عن رحلات' })
    }


    async load(){
        await this.page.goto('ar/')   
    }
    async HomeLoad(){
        await expect(this.HomeHeader).toContainText('المطار، صديقك في السفر')
        await expect(this.HotelsSelected).toContainText('فنادق')
        await this.DestinationHotelInput.click()
        await this.DestinationHotelInput.clear()
        await this.DestinationHotelInput.type('Barcelona, Catalonia, Spain')
        await this.page.waitForTimeout(2000)
        await this.page.keyboard.press('Enter');
        // await this.DestinationSelect.click()
        // await this.page.waitForTimeout(5000) // Wait for 1 second after clicking DestinationSelect
      


   }
   async HotelsDates(){
       
    await this.CheckInDates.click()
    await this.NextMonthBTN.click()
      await this.InDate.click()
        await this.OutDate.click()
    
    // await this.page.getByText('22').nth(2).click();
    // await this.page.getByText('29').nth(2).click();
//     await this.page.getByText('1', { exact: true }).nth(2).click();
//   await this.page.getByText('9', { exact: true }).nth(1).click();
    // await this.page.getByText('27 May,').click()
          
    }

    async Guest(){
        await this.GuestRoomSelect.click() 
        await this.AdultIncr.click()
        await this.ConfirmGuestBTN.click()
        // await this.page.waitForTimeout(2000)
        await this.BackGround.click({ position: { x: 0, y: 0 } })
        await this.ConfirmSearchBTN.click({ force: true })
        await this.ConfirmSearchBTN.click({ force: true })

    }
    async FlightSeclection(){
        await this.FlightSection.click()
        await this.FlightFrom.click()
        await this.FlightFrom.clear()
        await this.FlightFrom.type('Spain')
        await this.page.waitForTimeout(2000)
        await this.page.keyboard.press('Enter');
        await this.FlightTo.click()
        await this.FlightTo.clear() 
        await this.FlightTo.type('Riyadh')
        await this.page.waitForTimeout(2000)
        await this.page.keyboard.press('Enter');
        await this.FlightDate.click()
        await this.FlightNextMonth.click()
        await this.InDate.click()
        await this.OutDate.click()
        await this.FlightToggle.click()
        await this.page.waitForTimeout(2000)
        await this.FlighClassSelect.click()
        await this.FlightfrSTClass.click()
        await this.FlightBackGround.click({ position: { x: 0, y: 0 } })
      

        // await this.page.waitForTimeout(2000)
        await this.ConfirmSearchFlightBTN.click({ force: true })
        await this.ConfirmSearchFlightBTN.click({ force: true })
      
    }


   
}
