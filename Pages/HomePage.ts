import { APIRequestContext, BrowserContext, expect, Page } from "@playwright/test";

import Config   from '../playwright.config'
import { config } from "process";

export default class HomePage{
    getByRole(arg0: string, arg1: { name: string; }) {
        throw new Error("Method not implemented.");
    }
    private page:Page;
    private request?:APIRequestContext;
    private context?:BrowserContext;
    constructor(page:Page,requst?:APIRequestContext,context?:BrowserContext){
        this.page=page;
        this.request=requst;
        this.context=context
    }


    
    
    private get HomeHeader(){
        return this.page.getByText('Your travel mate')
    }
    private get HotelsSelected(){
        return this.page.getByRole('tab', { name: 'hotels', exact: true })
    }
     private get DestinationHotelInput(){
        return this.page.getByRole('combobox', { name: 'Destination or Hotel' })
    }
    //  private get DestinationSelect(){
    //     return this.page.locator('div').filter({ hasText:"Spain"}).nth(1)
    // }
    private get DestinationSelect(){
        return this.page.getByRole('option', { name: 'Catalonia Port Barcelona, Spain' })
    }
     private get CheckIn(){
        return this.page.locator('.almatar-calendar__head').filter({ hasText : 'Check in' })
    }
    private get NextMonthBTN(){
        return this.page.getByLabel('hotels', { exact: true }).getByRole('button').filter({ hasText: /^$/ }).nth(1)
    }
    private get InDate(){
        return this.page.getByText('10', { exact: true }).nth(1)
    }
    private get OutDate(){
        return this.page.getByText('17', { exact: true }).nth(1)
    }
  

    async load(){
        await this.page.goto("https://almatar.com/en/")   
    }
    async HomeLoad(){
        await expect(this.HomeHeader).toContainText('Your travel mate')
        await expect(this.HotelsSelected).toContainText('hotels')
        await this.HotelsSelected.click()
        await this.DestinationHotelInput.fill('Barcelona, Catalonia, Spai')
        await this.DestinationSelect.click()
        // await this.page.waitForTimeout(5000) // Wait for 1 second after clicking DestinationSelect
      


   }
   async HotelsDates(){
       
    await this.CheckIn.click()
    await this.NextMonthBTN.click()
      await this.InDate.click()
        await this.OutDate.click()
    
    // await this.page.getByText('22').nth(2).click();
    // await this.page.getByText('29').nth(2).click();
//     await this.page.getByText('1', { exact: true }).nth(2).click();
//   await this.page.getByText('9', { exact: true }).nth(1).click();
    // await this.page.getByText('27 May,').click()
          
    }

   
}
