class Person {
    SamePerson() {
        return cy.get("#Kol7")
    }
    AddPolicyHolder() {
        return cy.get("[class='white_link header_button']").eq(0)
    }
    PolicyHolderGrid() {
        return cy.get("#basic-grid_1")
    }







    AddInsuredPerson() {
        return cy.get(".spinner_year_3.input.lift.center.ui-spinner-input")
    }
    InsuredPersonGrid() {
        return cy.get("#DurationMonthValue")
    }
    DateEnd() {
        return cy.get("#Kol4")
    }
    States() {
        return cy.get("#ContentPlaceHolder1_Kol29_uc_idWucPlaces_tbStates")
    }
    Places() {
        return cy.get("#ContentPlaceHolder1_Kol29_uc_idWucPlaces_tbPlaces")
    }
    PlacesList() {
        return cy.get("[class='ui-menu-item']")
    }
    Currency() {
        return cy.get("#Kol22")
    }
    PaymentDynamik() {
        return cy.get("#Kol24")
    }
    FXClause() {
        return cy.get("#Kol23")
    }
    PaymentMethod() {
        return cy.get("#Kol21")
    }
    Bank() {
        return cy.get("#Kol30")
    }
    Employ() {
        return cy.get("#Kol14_1")
    }
    Indeksacija() {
        return cy.get("#Kol14_90")
    }
    KlauzulaODobiti() {
        return cy.get("#Kol14_120")
    }
    Vinculation() {
        return cy.get("#Kol14_60")
    }
    DurationInMonthsValue() {
        return cy.get("#DurationMonthValue")
    }
    DurationInMonths() {
        return cy.get("#Kol51")
    }
    IndexationFixValues() {
        return cy.get("#Kol62")
    }
}
export default Person