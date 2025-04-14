//HOOKS --> are special functions that help manage the setup and teardown of tests. They allow you to execute code 
// before or after your tests run

//before --> block Runs once before all tests in a describe block.
//after ---> block  Runs once after all tests in a describe block.
//beofreEach --> block Runs before each individual test in a describe block.
//afterEach --> block  Runs after each individual test.

/* tags  --> 
it.skip() --> it will skip correesponding test block with it.skip()
it.only() --> it will only execute that test block with it.only()
*/
describe('MyTestSuite', ()=>{

    before(()=>{

        cy.log("********** launch app *********");   
    })


    beforeEach(()=>{
        cy.log("********** LOGIN TO APP *********"); 
    })

it('search', ()=>{

cy.log("********** searching *********");


})


it('Advanced search', ()=>{

cy.log('*********Advacned search **********');


})


it.skip('Listing Products', ()=>{

    cy.log('*********Listing Products **********');


})


after(()=>{

    cy.log("********** close app *********");   
})

afterEach(()=>{

    cy.log("********** Logout app *********");   

})

})