describe('Navigatoin methods',()=>{

    /*
    cy.go('back')     
    cy.go('forward')  
    y.go(-1)               // To go backword page
    cy.go(1)               // go forward page
    cy.reload()           // to reload the pages

    */

it('Navigation go ,back,forward',()=>{
cy.visit('https://www.opencart.com/index.php?route=cms/demo')
//cy.get
cy.get('.nav > :nth-child(1) > a').click()
cy.get('.page-header > .container > h1').should('contain',"Features")

cy.go('back')  // go backword page


cy.get('.nav > :nth-child(2) > a').click()
cy.get('h1').should('contain','Demonstration')
cy.go('back')   // go backword page

cy.go('forward') // go forward page
cy.get('h1').should('contain','Demonstration')


cy.go(-1) // To go backword page
cy.go(1) // go forward page

cy.reload() // to reload the pages

})



})