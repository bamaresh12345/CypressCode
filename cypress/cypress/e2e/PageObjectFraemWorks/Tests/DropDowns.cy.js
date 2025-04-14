describe('Validate drop downs',()=>{
/*
.select('India').should('have.value','india')



.each( ($ele) =>{  // **** IMP select | #country | option

    cy.log($ele.text().trim())  // it prints the values in Dropdown  *** IMP use this
     cy.log($ele.val())  // it prints the values inside the tag
   
   // cy.log('hello')
  })


  .each( ($ele) =>{
        
        drodownvalues.push($ele.text().trim());  // *** push() , pop()

    }).then ( ()=>{
        cy.log('Total Dropdwon values are : ', drodownvalues);
        cy.log('3rd Dropdwon value is : ', drodownvalues[3]);
        cy.log('6th Dropdwon value is : ', drodownvalues[6]);
        cy.log(drodownvalues.toString());  //United States,Canada,United Kingdom,Germany,France,Australia,Japan,China,Brazil,India
    })

*/

it('Validate dropdown with select', ()=>{

  cy.visit('https://testautomationpractice.blogspot.com/')
  
  //Approach one
  cy.get('#country').select('India').should('have.value','india')

  //Approach two
  cy.get('#country')
  .select('Japan')
  .should('have.value','japan')

  cy.wait(1000);

  /*  Method 1: Get and Print All Dropdown Values
    cy.get('select#dropdown-id option') → Selects all <option> elements inside the dropdown.
     .each(($el, index, $list) => {...}) → Loops through each <option>.
     $el.text() → Extracts the visible text of each dropdown option.
     cy.log() → Prints the value in the Cypress console.
*/
  // to get the list of values from dropdown
  cy.get('select#country option').each( ($ele) =>{  // **** IMP select | #country | option

    cy.log($ele.text().trim())  // it prints the values in Dropdown  *** IMP use this
     cy.log($ele.val())  // it prints the values inside the tag
   
   // cy.log('hello')
  })


  /*Method 2: Store All Values in an Array

    Stores all dropdown options in an array (dropdownValues).
    .trim() ensures there are no extra spaces.
    Uses .then() to ensure Cypress properly waits for the loop to finish before logging.
  */
    let actulvalues = ['United States','Canada','United Kingdom','Germany','France','Australia','Japan','China','Brazil','India']
    let drodownvalues = []; // array declration
    cy.get('select#country option').each( ($ele) =>{
        
        drodownvalues.push($ele.text().trim());

    }).then ( ()=>{
        cy.log('Total Dropdwon values are : ', drodownvalues);
        cy.log('3rd Dropdwon value is : ', drodownvalues[3]);
        cy.log('6th Dropdwon value is : ', drodownvalues[6]);
        cy.log(drodownvalues.toString());  //United States,Canada,United Kingdom,Germany,France,Australia,Japan,China,Brazil,India
    })

    
    const areEqual = drodownvalues.length === actulvalues.length 
    const areEqul2 = drodownvalues.every((value, index) => value === actulvalues[index]);

    cy.log('areEqual-->? ' + areEqual);
    cy.log('areEqual2-->? ' + areEqual2);







})
  it('Validate dropdown with Enter textbox and have.text', ()=>{ 
  //3rd Approach with other element with enter button and two type methods
 

 cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
 cy.get('#select2-billing_country-container').click()
 cy.get('.select2-search__field').type('India').type('{downarrow}').type('{enter}')
   
  cy.get('#select2-billing_country-container').should('have.text','India')   // *** IMP have.text , ot get the webelemlent text value


 

  


})

it('Validate dropdown with Auto suggestion and have.text', ()=>{ 
    //3rd Approach with other element with enter button and two type methods
   
  
   cy.visit('https://en.wikipedia.org/wiki/Main_Page')
   
   cy.get('.cdx-text-input__input').type('Delhi')

   cy.get('.select2-search__field').type('India').type('{downarrow}').type('{enter}')
     
    cy.get('.cdx-menu__listbox').contains('Delhi Capitals').click()
    //cy.get('#firstHeading').should(before.)

  
    
  
  
  })


  it.only('Validate Dynamic dropdown with Auto suggestion google.com ', ()=>{ 
    //3rd Approach with other element with enter button and two type methods
   
  
   cy.visit('https://www.google.com')
   
   cy.get('#APjFqb').type('cypress Automation')

   cy.get('.wM6W7d>span').should('have.length',13)
   cy.get('.wM6W7d>span').each( ($el, index, $list) =>{
   if($el.text()=='cypress automation tool')
   {
    cy.wrap($el).click();
   }


   cy.get('#APjFqb').should('have.text','cypress automation tool')

   } )


     
  
  
    
  
  
  })



})