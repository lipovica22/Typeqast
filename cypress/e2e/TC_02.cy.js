import TC_01 from '../mapping/linksRegistrationP.js';
const linksRegistrationP = new TC_01();


describe('TC-01', () => {

  it('Registration', () => {
    cy.visit("https://www.links.hr/hr/register")
    cy.wait(2000)
    cy.get("[class='ok-button button-1']").click()
    cy.contains('h1', "Registrirajte se")
    linksRegistrationP.RegisterAsCompany().click()
    linksRegistrationP.Company().type("UNIQA d.d.")
    linksRegistrationP.OIB().type("59216361063")
    linksRegistrationP.Telephone().type("+38516178300")
    linksRegistrationP.CompanyAddress().type("Planinska ulica 13A")
    linksRegistrationP.CompanyPostalCode().type("10040")
    linksRegistrationP.CompanyPostalCodeList().click()

    linksRegistrationP.Female().click()
    linksRegistrationP.FirstName().type("Testina")
    linksRegistrationP.LastName().type("Testović")
    linksRegistrationP.DateOfBirthDay().select("30")
    linksRegistrationP.DateOfBirthMonth().select("lipanj")
    linksRegistrationP.DateOfBirthYear().select("1980")
    linksRegistrationP.Email().type("uniqatest22@gmail.com")
    linksRegistrationP.StreetAddress().type("zagrebačka")
    linksRegistrationP.PostalCode().type("10000")
    linksRegistrationP.PostalCodeList().click()
    linksRegistrationP.Password().type("test22")
    linksRegistrationP.ConfirmPassword().type("test22")
    linksRegistrationP.Submit().click()

    
  })

  
})  

