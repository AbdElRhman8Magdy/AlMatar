import test, { expect } from "@playwright/test";

import HomePage from "../Pages/HomePage";
import HotelSearchPage from "../Pages/HotelSearchPage";
import FlightSearchPage from "../Pages/FlightSearchPage";

test.describe('ALMatar', () => {
  test.beforeEach(async ({ page, request, context }) => {
    // Navigate to the page before each test
    const homePage = new HomePage(page,request,context); 
 
 await homePage.load();
 
    })

  
test("ALMatar Home - hotels",async({page,request,context})=>{
    const homePage = new HomePage(page,request,context); 
    const hotelSearchPage = new HotelSearchPage(page,request,context); 


 await homePage.HomeLoad(); 
 await homePage.HotelsDates();
 await homePage.Guest();
 await hotelSearchPage.HotelsDetails();
 
     })
test("ALMatar - Flight",async({page,request,context})=>{
    const homePage = new HomePage(page,request,context);
    const flightSearchPage = new FlightSearchPage(page,request,context); 


 await homePage.HomeLoad(); 
 await homePage.FlightSeclection();
 await flightSearchPage.FlightsDetails();
 
 
     })
})

