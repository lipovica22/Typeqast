class linksLogin {
    TitleCustomer() {
        return cy.get("[class='title']")
    }
    Email() {
        return cy.get("[id='Email']")
    }
    Password() {
        return cy.get("[id='Password']")
    }
    Recaptcha() {
        return cy.get("[class='recaptcha-checkbox goog-inline-block recaptcha-checkbox-unchecked rc-anchor-checkbox']")
    }
    //Recaptcha() {
    //    return cy.get("[id='recaptcha - anchor']")
    //}
    Submit() {
        return cy.get("[type='submit']")
    }
    
}
export default linksLogin