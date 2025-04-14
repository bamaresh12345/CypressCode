

class loginPage  // ** IMP
{
    userName = "#txt-username";
    password = "#txt-password"
    button = "#btn-login";



    setUserName(user)
    {
       cy.get(this.userName).type(user);   // this. *** IMP
    }
    setPassword(password)
    {
        cy.get(this.password).type(password);     // this. *** IMP
    }

    clickSiginButton()
    {
        cy.get(this.button).click();
    }



}

export default loginPage;  // ** IMP