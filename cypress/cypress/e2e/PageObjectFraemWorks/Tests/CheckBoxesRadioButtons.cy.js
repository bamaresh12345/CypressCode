
describe('CHeck UI Elments',()=>{
/*
.check().should('be.checked')
.uncheck().should('not.be.checked')
.first().check().should('be.checked')
.last().check().should('be.checked')

.then( (x)=>{  // to get all checkbox text

        cy.log(x.text())    --> or x.value();
});


*/

it('Visibility of Radio buttons',()=>{

cy.visit('https://testautomationpractice.blogspot.com/')

//Check radio buttons are visible
cy.get('#male').should('be.visible')
cy.get('#female').should('be.visible')

//select the male radio buttons
cy.get('#female').check()
cy.get('#female').should('be.checked')
cy.get('#male').should('not.be.checked')

//select the female radio buttons
cy.get('#male').check()
cy.get('#male').should('be.checked')
cy.get('#female').should('not.be.checked')

})


it('Visibility of Chekboxes buttons',()=>{

    cy.visit('https://testautomationpractice.blogspot.com/')
    //Visiblity of checkbox and selecting checkbox
    cy.get('#sunday').should('be.visible')
    cy.get('#sunday').check()    // *** IMP to check the chekbox
    cy.get('#sunday').should('be.checked')

    cy.get('#sunday').uncheck() // *** IMP to uncheck the chekbox
    cy.get('#sunday').should('not.be.checked')

    //How to select the checkboxes
    cy.get('[type=checkbox][class=form-check-input]').check().should('be.checked')

    //How to Unselect the checkboxes
    cy.get('[type=checkbox][class=form-check-input]').uncheck().should('not.be.checked')

     //How to select the frist checkbox
     cy.get('[type=checkbox][class=form-check-input]').first().check().should('be.checked')

     //How to select the last checkbox
     cy.get('[type=checkbox][class=form-check-input]').last().check().should('be.checked')

     //cy.get('[id=btn-book-appointment]').then( (x) =>{  
     cy.get('[type=checkbox][class=form-check-input]').then( (x)=>{  // Need to Invistigate

        cy.log(x.text())
        cy.log("TEst Amar")
        console.log("Amar")
     })

     
    })


})