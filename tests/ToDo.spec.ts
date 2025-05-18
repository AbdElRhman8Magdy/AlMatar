import test, { expect } from "@playwright/test";

import HomePage from "../Pages/HomePage";

test.describe('ALMatar', () => {
  test.beforeEach(async ({ page, request, context }) => {
    // Navigate to the page before each test
    const homePage = new HomePage(page,request,context); 
 
 await homePage.load();
 
    })

  
test("ALMatar Home",async({page,request,context})=>{
    const homePage = new HomePage(page,request,context); 

 await homePage.HomeLoad(); 
 await homePage.HotelsDates();
 
     })
})

