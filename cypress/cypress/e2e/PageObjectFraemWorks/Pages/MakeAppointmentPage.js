class MakeAppointmentPage
{

    facility = "[name='facility']";
    applycheckBox = "[name='hospital_readmission']";
    opiton = "[value='Medicaid']";
    dateBox = "[id='txt_visit_date']";
    comments = "#txt_comment";
    bookAptButton = "[id='btn-book-appointment']";

    selectFecility()
    {
        cy.get(this.facility).select(2);
    }

    selectCheckBox()
    {
        cy.get(this.applycheckBox).check();
    }

    selectRadioButn()
    {
        cy.get(this.opiton).check();
    }

    enterDates()
    {
        cy.get(this.dateBox).type("12/12/2025");
        cy.get(this.dateBox).type("{Esc}");
    }

    enterComments()
    {
        cy.get(this.comments).type("COmments");
        
    }

    ClickbookAptButton()
    {
        cy.get(this.ClickbookAptButton).click();
    }

}

export default MakeAppointmentPage; 