

class MainPage     // ** IMP
{

makeapt = "#btn-make-appointment";

makeAppointment()
{
    cy.get(this.makeapt).click();   // this. *** IMP
}

}

export default MainPage;   // ** IMP