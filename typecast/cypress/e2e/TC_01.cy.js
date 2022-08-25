import TC_01 from '../mapping/linksRegistrationP.js';
const linksRegistrationP = new TC_01();


describe('TC-01', () => {

  it('Registration - individual', () => {
       
    cy.log("Open URL")
    cy.visit("https://www.links.hr/hr/register");
    
    cy.log("Accept cookies")
    cy.get("[class='ok-button button-1']").click();

    cy.log("Personal information")
    cy.contains('h1', "Registrirajte se");
    linksRegistrationP.Message().contains("*Za dobivanje R1 računa potrebno se registrirati kao pravna osoba sa podacima tvrtke ili obrta.")
    linksRegistrationP.Message().contains("Naknadno izdavanje R1 računa nije moguće.")
    linksRegistrationP.RegisterAsCompany().should("not.be.disabled")
    linksRegistrationP.Male().click();
    linksRegistrationP.FirstName().type("Test");
    linksRegistrationP.LastName().type("Testović");
    linksRegistrationP.DateOfBirthDay().select("15");
    linksRegistrationP.DateOfBirthMonth().select("travanj");
    linksRegistrationP.DateOfBirthYear().select("2000");
    linksRegistrationP.Email().type("test.testovictc@gmail.com");

    cy.log("Personal Address")
    linksRegistrationP.StreetAddress().type("zagrebačka");
    linksRegistrationP.PostalCode().type("10000");
    linksRegistrationP.PostalCodeList().contains("10000 ZAGREB, Croatia").click();
    linksRegistrationP.CitySelected().should("eq","ZAGREB")
    linksRegistrationP.CountryList().should("be.disabled")
   
    linksRegistrationP.Newsletter().should("not.be.disabled")

    cy.log("Define password")
    linksRegistrationP.Password().type("test2022");
    linksRegistrationP.ConfirmPassword().type("test2022");
    
    cy.log("Registration")
    linksRegistrationP.Submit().click();
    linksRegistrationP.Error().should("contain","Navedena elektronska pošta/adresa postoji");
    linksRegistrationP.Email().clear().type("test.testovictc@gm.c5u");
    linksRegistrationP.Submit().click();

    cy.log("Confirmation") 
    linksRegistrationP.Confirmation().should("contain","Poslan vam je e-mail koji sadrži upute za aktivaciju članstva")
    linksRegistrationP.Continue().click()
    cy.url().should("eq","https://www.links.hr/hr/") 
  })
})
