class LOB {
    lifeB() {
        return cy.get(".ico_life")
    }
    householdB() {
        return cy.get("[class='box_product hvr-grow ico_property']")
    }
    cascoB() {
        return cy.get("[class='box_product hvr-grow ico_motor']")
    }
    HealthB() {
        return cy.get("[class='box_product hvr-grow ico_accidenthealth']")
    }
}
export default LOB