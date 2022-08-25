import TC_02 from '../mapping/linksRegistrationP.js';
const linksRegistrationP = new TC_02();


describe('TC-02', () => {

  it('Registration - company', () => {
    cy.log("Open URL")
    cy.visit("https://www.links.hr/hr/register")
    
    cy.log("Accept cookies")
    cy.get("[class='ok-button button-1']").click()
    
    cy.log("Company information")
    cy.contains('h1', "Registrirajte se")
    linksRegistrationP.Message().contains("*Za dobivanje R1 računa potrebno se registrirati kao pravna osoba sa podacima tvrtke ili obrta.")
    linksRegistrationP.Message().contains("Naknadno izdavanje R1 računa nije moguće.")
    linksRegistrationP.RegisterAsCompany().should("not.be.disabled")
    linksRegistrationP.RegisterAsCompany().click()
    linksRegistrationP.Company().type("UNIQA d.d.")
    linksRegistrationP.OIB().type("59216361063")
    linksRegistrationP.Telephone().type("+38516178300")
    linksRegistrationP.CompanyAddress().type("Planinska ulica 13A")
    linksRegistrationP.CompanyPostalCode().type("10040")
    linksRegistrationP.CompanyPostalCodeList().click()
    
    cy.log("Personal information")
    linksRegistrationP.Female().click()
    linksRegistrationP.FirstName().type("Testina")
    linksRegistrationP.LastName().type("Testović")
    linksRegistrationP.DateOfBirthDay().select("30")
    linksRegistrationP.DateOfBirthMonth().select("lipanj")
    linksRegistrationP.DateOfBirthYear().select("1980")
    linksRegistrationP.Email().type("uniqatest22@gmail.com")

    cy.log("Personal Address")
    linksRegistrationP.StreetAddress().type("zagrebačka")
    linksRegistrationP.City().type("RIJEKA")
    linksRegistrationP.StreetAddress().click()
    linksRegistrationP.PostalCode().invoke("val").should("eq","51000")
    linksRegistrationP.CountryList().should("be.disabled")
    
    linksRegistrationP.Newsletter().should("not.be.disabled")
    
    cy.log("Define password")
    linksRegistrationP.Password().type("test22")
    linksRegistrationP.ConfirmPassword().type("test22")

   cy.log("Registration")
    linksRegistrationP.Submit().click();
    linksRegistrationP.Error().should("contain","Navedena elektronska pošta/adresa postoji");
    linksRegistrationP.Email().clear().type("uniqatest22@gmail.com");
    linksRegistrationP.Submit().click();
    
    cy.log("Confirmation") 
    linksRegistrationP.Confirmation().should("contain","Poslan vam je e-mail koji sadrži upute za aktivaciju članstva")
    linksRegistrationP.Continue().click()
    cy.url().should("eq","https://www.links.hr/hr/") 
  })
})

