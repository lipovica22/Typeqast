
class login {
    username() {
        return cy.get('input[name="Username"]')
    }
    password() {
        return cy.get('input[name="Password"]')
    }
    submit() {
        return cy.get('button[value="login"]')
    }
      
}
export default login