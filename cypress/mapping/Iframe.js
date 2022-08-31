class Iframe {
    AddEditPersonFrame() {
        return cy.get("[tag='iframe']")
    }
    Close() {
        return cy.get("[class='ui-button-close']")
    }
    JMBG() {
        return cy.get("iframe").find("#MainContent_wucIndividualBusinessEntitySearch_tbIdentificationNumber")
    }
     SearchFL() {
        return cy.get("#MainContent_IndividualClientLifeFormView_hlSearch")
    }
    SaveButtonFL() {
        return cy.get("#MainContent_IndividualClientLifeFormView_UpdateButton")
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
export default Iframe