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
        return cy.get("#rc-anchor-container").parent().find("[class='recaptcha-checkbox goog-inline-block recaptcha-checkbox-unchecked rc-anchor-checkbox']")
    }
    Submit() {
        return cy.get("[type='submit']")
    }
    
}
export default linksLogin