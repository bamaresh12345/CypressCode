/// <reference types="cypress" />
//// <reference types="cypress-xpath" />

describe("Asserssions Validation", ()=>{

/*implict assertions --> use only SHOULD and AND
   .should('keys','value')  --> .should('contain','demo')|.and('have.value',"text")
   .and('keys','value')

keys --> include , eq , contain , have.value, be.visible, be.checked, not.be.checked ,not.contain ,  exist,  have.length
keys --> not.include , not.eq , not.contain , not.contain , not.be.visible , not.exist, not.have.value , not.have.length


Explict Asserstions -->  EXPECT with BDD approach and ASSERT with TDD approach
       EXPECT
        expect(actName).to.equal(expName)
         expect(actName).to.not.equal('test')

         ASSERT
         assert.equal(actName,expName)
         assert.notEqual(actName,'test1')
         assert.exists('test')
         //assert.notExists
         assert.include(actName,'Book')
         assert.notInclude(actName,'abcd')

*/

it('Implict Assetions',()=>{
    

    cy.visit('https://katalon-demo-cura.herokuapp.com/')

    cy.url().should('include','katalon-demo-cura.herokuapp.com')
    cy.url().should('eq','https://katalon-demo-cura.herokuapp.com/')
    cy.url().should('contain','demo')

   // same as above 2nd way of writing withouth cy.url()
    cy.url().should('include','katalon-demo-cura.herokuapp.com')
    .should('eq','https://katalon-demo-cura.herokuapp.com/')
    .should('contain','demo')

    // same as above 3rd way of writing withouth cy.url() and with and
    cy.url().should('include','katalon-demo-cura.herokuapp.com')
    .and('eq','https://katalon-demo-cura.herokuapp.com/')
    .and('contain','demo')

    // not contain
     cy.url().should('include','katalon-demo-cura.herokuapp.com')
     .and('eq','https://katalon-demo-cura.herokuapp.com/')
     .and('not.contain','test')

     // cy.title() --> gets the title of the window
     cy.title().should('include',"CURA Healthcare Servic")
     //.and('eq','test')
       .and('not.contain','test')

     
       cy.get('h1').should('be.visible') // checkes logo exists or not
      // .and('exist')                     // checkes logo exists or not
       
     // cy.xpath('//a').should('have.length','5')

     cy.get('#btn-make-appointment').click()
     //cy.wait(1000)
     cy.get('#txt-username').type('John Doe')
     cy.get('#txt-username').should('have.value','John Doe')  // checkging value





})


it('EXPLICIT Assetions',()=>{

    cy.visit('https://katalon-demo-cura.herokuapp.com/') 
    cy.get('#btn-make-appointment').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()

    let expName = "Book Appointment";
   
    cy.get('[id=btn-book-appointment]').then( (x) =>{  // User defined javascript method
         
        let actName =x.text()
        cy.log(actName)
        //BDD Style
         expect(actName).to.equal(expName)
         expect(actName).to.not.equal('test')
         expect(4).to.be.above(3);
         expect(actName).to.be.a('string');
         expect(null).to.not.exist  
         

         //TDD Style
         assert.equal(actName,expName)
         assert.notEqual(actName,'test1')
         assert.exists('test')
         //assert.notExists
         assert.include(actName,'Book')
         assert.notInclude(actName,'abcd')
         // Asserts that 4 is above 3
        assert.isAbove(4, 3, '4 is greater than 3'); 
        // Asserts that "name" is a string
        assert.typeOf("name", 'string', '"name" is a string'); 
        // Fails, demonstrating that null doesn't exist
        assert.notExists(null, 'null exists');  


    } )

})

})