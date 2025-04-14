///<reference types="cypress" />

import loginPage from "../Pages/loginPage.js";  // ** IMP
import MainPage from "../Pages/MainPage.js";    // ** IMP

import MakeAppointmentPage from "../Pages/MakeAppointmentPage.js";


describe('Login to App', function(){
   
  it('Loign to App',function(){
 
     cy.visit('https://katalon-demo-cura.herokuapp.com/')


     cy.fixture('loginData').then((data) =>{  // *** IMP pulling data from fixture folder from loginData.json file
        
      const mainpg = new MainPage();
      mainpg.makeAppointment();
      cy.get('#btn-make-appointment').click();
       const ln = new loginPage();  /// *** IMP
      
      ln.setUserName(data.username);    // *** IMP pulling data from fixture folder from loginData.json file
      ln.setPassword(data.password);    // *** IMP pulling data from fixture folder from loginData.json file
      ln.clickSiginButton();


      const mktapt = new MakeAppointmentPage();
   mktapt.selectFecility();
   mktapt.selectCheckBox();
   mktapt.selectRadioButn();
   mktapt.enterDates();
   mktapt.enterComments();
   mktapt.ClickbookAptButton();
      

     });
/*
     const mainpg = new MainPage();
     mainpg.makeAppointment();
     //cy.get('#btn-make-appointment').click();
      const ln = new loginPage();  /// *** IMP
     
     ln.clickSiginButton();ln.setUserName('John Doe')
     ln.setPassword("ThisIsNotAPassword") */

    /* const mktapt = new MakeAppointmentPage();
     mktapt.selectFecility();
     mktapt.selectCheckBox();
     mktapt.selectRadioButn();
     mktapt.enterDates();
     mktapt.enterComments();
     mktapt.ClickbookAptButton(); */


  });


  it('Test to App',function(){
 
   

   const mktapt = new MakeAppointmentPage();
   mktapt.selectFecility();
   mktapt.selectCheckBox();
   mktapt.selectRadioButn();
   mktapt.enterDates();
   mktapt.enterComments();
   mktapt.ClickbookAptButton();


});


  
 
   
 
 })