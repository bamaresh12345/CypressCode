describe('verfiy Child Tab',()=>{
/*
.invoke('removeAttr','target').click() 

.then( (ele)=>{ 
           
            let url=ele.prop('href');   // **** IMP prop() method is used to get the attributes of element
            cy.visit(url)

*/

    it('verfiy Child Tab Approach one', ()=>{
       
        cy.visit('https://the-internet.herokuapp.com/')
        
        // click on link by using invoke method and with 'removeAttr','target'
        cy.get(':nth-child(33) > a').invoke('removeAttr','target').click() 
        cy.url().should('include','https://the-internet.herokuapp.com/windows')

        cy.wait(5000);

        cy.go('back'); //go back to parent window

    })


    // parent and chhild domain sohuld be same is the limatation  for 2nd approach
    it('verfiy Child Tab Approach Two', ()=>{
       
        cy.visit('https://the-internet.herokuapp.com/')
        
        // capture the attribute
        cy.get(':nth-child(33) > a').then( (ele)=>{  // *** IMP use Jquery method to get the attributes
           
            let url=ele.prop('href');   // **** IMP prop() method is used to get the attributes of element
            cy.visit(url)

        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows') 

        cy.wait(5000);

        cy.go('back'); //go back to parent window

    })


})