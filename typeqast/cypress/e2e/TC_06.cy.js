import TC_06 from '../mapping/linksRegistrationP.js';
const linksRegistrationP = new TC_06();


describe('TC-06', () => {

  it('Registration - company - validation test', () => {
    cy.log("Open URL")
    cy.visit("https://www.links.hr/hr/register")
    
    cy.log("Accept cookies")
    cy.get("[class='ok-button button-1']").click()
    linksRegistrationP.RegisterAsCompany().click()

    cy.log("Validations")
    linksRegistrationP.Submit().click()
   
    linksRegistrationP.FirstNameError().should("eq","Ime je potrebno")
    linksRegistrationP.LastNameError().should("eq","Prezime je potrebno.")
    linksRegistrationP.EmailError().should("eq","Elektronska pošta je potrebna")
    linksRegistrationP.PasswordError().should("eq","Lozinka je potrebna.")
    linksRegistrationP.ConfirmPasswordError().should("eq","Lozinka je potrebna.")
    
    cy.log("Personal information")
    linksRegistrationP.FirstName().type("Testina")
    linksRegistrationP.LastName().type("Testović")
    linksRegistrationP.Email().type("uniqatest22@gmail")
    linksRegistrationP.EmailError().should("eq","Pogrešan e-mail")
    linksRegistrationP.Email().clear()
    linksRegistrationP.Email().type("uniqatest22@gmail.com")

    cy.log("Define password")
    linksRegistrationP.Password().type("123");
    linksRegistrationP.PasswordError().should("eq","Lozinka treba imati najmanje 6 znakova.")
    linksRegistrationP.Password().type("123456");
    linksRegistrationP.ConfirmPassword().type("123");
    linksRegistrationP.ConfirmPasswordError().should("eq","Lozinka i potvrda lozinke se ne podudaraju.")
    linksRegistrationP.ConfirmPassword().type("123456");
    linksRegistrationP.Submit().click();
    
    cy.log("Validation - Company information")
    linksRegistrationP.CompanyError().should("eq","Tvrtka je potrebna.")
    linksRegistrationP.OIBError().should("eq","OIB tvrtke je potreban")
    linksRegistrationP.CompanyAddressError().should("eq","Adresa 1 je potrebna.")
    linksRegistrationP.CompanyPostalCodeError().should("eq","Poštanski broj je potreban")
    linksRegistrationP.CompanyCityError().should("eq","Grad je potreban")
    linksRegistrationP.CompanyCountryId_dropdownError().should("eq","Država je potrebna.")

    linksRegistrationP.OIB().type("592186361063")
    linksRegistrationP.Company().click()
    linksRegistrationP.OIBError().should("eq","Neispravan OIB")
    linksRegistrationP.OIB().clear()
   
    linksRegistrationP.Company().type("UNIQA d.d.")
    linksRegistrationP.OIB().type("59216361063")
    linksRegistrationP.CompanyAddress().type("Planinska ulica 13A")
    linksRegistrationP.CompanyPostalCode().type("10040")
    linksRegistrationP.CompanyPostalCodeList().click()
    linksRegistrationP.Submit().click();
    
    cy.log("Confirmation") 
    linksRegistrationP.Error().should("contain","Navedena elektronska pošta/adresa postoji");
    linksRegistrationP.Email().clear().type("t22@gl.com")
    linksRegistrationP.Submit().click();
    
    cy.log("Confirmation") 
    linksRegistrationP.Confirmation().should("contain","Poslan vam je e-mail koji sadrži upute za aktivaciju članstva")
    linksRegistrationP.Continue().click()
    cy.url().should("eq","https://www.links.hr/hr/") 
  })
})


