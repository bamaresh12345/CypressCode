///<reference types="cypress" />




describe('Login to App', function(){

   beforeEach(() => {
      cy.session('loginSession', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        cy.get('#txt-username').type('John Doe')
         cy.get('#txt-password').type('ThisIsNotAPassword')
         cy.get('#btn-login').click();
      });
    });

 it('Loign to App',function(){

    cy.visit('https://katalon-demo-cura.herokuapp.com/')
   cy.wait(100);
   /* cy.get('#btn-make-appointment').click();
    cy.wait(1000);
    cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('ThisIsNotAPassword');
      cy.get('#btn-login').type('ThisIsNotAPassword');
      cy.get('#btn-login').click();
      cy.wait(1000);  */
      
   
   
 });


 it('CLikc on Make Appointment', function(){

   cy.get('#btn-make-appointment').click()
 })

 it('Login to App', function(){

      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('ThisIsNotAPassword')
      cy.get('#btn-login').click();
 })  

})