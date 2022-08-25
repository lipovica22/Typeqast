import TC_05 from '../mapping/linksRegistrationP.js';
const linksRegistrationP = new TC_05();


describe('TC-05', () => {

  it('Registration - individual - validation test', () => {
    cy.log("Open URL")
    cy.visit("https://www.links.hr/hr/register");
    
    cy.log("Accept cookies")
    cy.get("[class='ok-button button-1']").click();


    cy.log("Validations")
    linksRegistrationP.Submit().click()

    linksRegistrationP.FirstNameError().should("eq","Ime je potrebno")
    linksRegistrationP.LastNameError().should("eq","Prezime je potrebno.")
    linksRegistrationP.EmailError().should("eq","Elektronska pošta je potrebna")
    linksRegistrationP.PasswordError().should("eq","Lozinka je potrebna.")
    linksRegistrationP.ConfirmPasswordError().should("eq","Lozinka je potrebna.")

    cy.log("Personal information")
    linksRegistrationP.FirstName().type("Test");
    linksRegistrationP.LastName().type("Testović");
    linksRegistrationP.Email().type("test.testovic@com");
    linksRegistrationP.EmailError().should("eq","Pogrešan e-mail")
    linksRegistrationP.Email().clear().type("test.testovictc@gmail.com");   
    
    cy.log("Define password")
    linksRegistrationP.Password().type("123");
    linksRegistrationP.PasswordError().should("eq","Lozinka treba imati najmanje 6 znakova.")
    linksRegistrationP.Password().type("123456");
    linksRegistrationP.ConfirmPassword().type("123");
    linksRegistrationP.ConfirmPasswordError().should("eq","Lozinka i potvrda lozinke se ne podudaraju.")
    linksRegistrationP.ConfirmPassword().type("123456");
    linksRegistrationP.Submit().click();
    
cy.log("Validation - Personal information")
    linksRegistrationP.Error().should("contain","Navedena elektronska pošta/adresa postoji");
    linksRegistrationP.Email().clear().type("tc@gm45r4l.cm");
    linksRegistrationP.Submit().click();

    cy.log("Confirmation") 
    linksRegistrationP.Confirmation().should("contain","Poslan vam je e-mail koji sadrži upute za aktivaciju članstva")
    linksRegistrationP.Continue().click()
    cy.url().should("eq","https://www.links.hr/hr/")    
  })
})
