import TC_03 from '../mapping/linksLoginP.js';
const linksLoginP = new TC_03();


describe('TC-03', () => {

  it('Registration', () => {
    cy.visit("https://www.links.hr/hr/login")
    cy.get("[class='ok-button button-1']").click()
    //linksLoginP.TitleCustomer().contains("Postojeći korisnik")
    //linksLoginP.Email().type("uniqatest22@gmail.com")
    //linksLoginP.Password().type("test22")
    //cy.wait(2000)
    //cy.get('iframe[title="reCAPTCHA"]')
    //.first()
    //.then((recaptchaIframe) => {
    //  const body = recaptchaIframe.contents()
    //  cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
    //  })
    //linksLoginP.Recaptcha().click()
    ///
    //linksLoginP.Submit().eq(1).click()
  })

  
})  

