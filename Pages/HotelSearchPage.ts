import { APIRequestContext, BrowserContext, expect, Page } from "@playwright/test";

import Config   from '../playwright.config'
import { config } from "process";

export default class HotelSearchPage{
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


    
    
    private get Price(){
        return this.page.getByRole('tab', { name: 'نطاق السعر شامل الضريبة والخدمات' })
    }
    


   
   async HotelsDetails(){
       
        await expect(this.Price).toContainText('نطاق السعر شامل الضريبة والخدمات')

    

    }

    
   
}
