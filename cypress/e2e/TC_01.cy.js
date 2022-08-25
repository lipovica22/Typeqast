import TC_01 from '../mapping/linksRegistrationP.js';
const linksRegistrationP = new TC_01();


describe('TC-01', () => {

  it('Registration', () => {
    cy.visit("https://www.links.hr/hr/register")
    cy.wait(2000)
    cy.get("[class='ok-button button-1']").click()
    cy.contains('h1', "Registrirajte se")
    linksRegistrationP.Male().click()
    linksRegistrationP.FirstName().type("Test")
    linksRegistrationP.LastName().type("Testović")
    linksRegistrationP.DateOfBirthDay().select("15")
    linksRegistrationP.DateOfBirthMonth().select("travanj")
    linksRegistrationP.DateOfBirthYear().select("2000")
    linksRegistrationP.Email().type("test.testovic@gmail.com")
    linksRegistrationP.StreetAddress().type("zagrebačka")
    linksRegistrationP.PostalCode().type("10000")
    linksRegistrationP.PostalCodeList().click()
    linksRegistrationP.Password().type("test2022")
    linksRegistrationP.ConfirmPassword().type("test2022")
    linksRegistrationP.Submit().click()

    
  })

  
})  

