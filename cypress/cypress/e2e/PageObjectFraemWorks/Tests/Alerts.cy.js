describe('Validate Alerts',()=>{


    it('window:alert ok button Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('button[onclick="jsAlert()"]').click()

        cy.on('window:alert', (t)=>{    // *** cy.on('window:alert', (t)=>{
           
            expect(t).to.contains('JS Alert')

            //alert window automtacally closed by cypress
            cy.get('#result').should('have.text','You successfully clicked an alert')

        })

    })


    it('window:confrim ok button Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        // For OK button
        cy.get('button[onclick="jsConfirm()"]').click()

        cy.on('window:confrim', (t)=>{    // *** cy.on('window:alert', (t)=>{
           
            expect(t).to.contains('I am a JS Confirm')

             //alert window automtacally closed by clickin on OK button
             cy.on('window:confrim',()=> true); //--> ** IMP clicks on Cancel button
            //cy.on('window:confrim',()=> true); --> ** IMP clicks on OK button
           
            cy.get('#result').should('have.text','You clicked: Ok')

        })
       // For Cnecl button
        cy.get('button[onclick="jsConfirm()"]').click()

        cy.on('window:confrim', (t)=>{    // *** cy.on('window:alert', (t)=>{
           
            expect(t).to.contains('I am a JS Confirm')

             //alert window automtacally closed by clickin on OK button
            cy.on('window:confrim',()=> false); //--> ** IMP clicks on OK button
           
            cy.get('#result').should('have.text','You clicked: Calcel')

        })

    })

/*  Owrk on it ,when you ahve time
    it('window:alert ok button Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('button[onclick="jsAlert()"]').click()

        cy.on('window:prompt', (t)=>{    // *** cy.on('window:alert', (t)=>{
           
            expect(t).to.contains('JS Alert')

            //alert window automtacally closed by cypress
            cy.get('#result').should('have.text','You successfully clicked an alert')

        })

    })

    */



})