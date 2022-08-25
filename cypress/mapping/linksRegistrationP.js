class linksRegistration {
    Title() {
        return cy.get("[class='page-title']")
    }
    Message() {
        return cy.get("")
    }
    RegisterAsCompany() {
        return cy.get("[id='RegisterAsCompany']")
    }
    CompanyInfo() {
        return cy.get("[id='companyInfo']")
    }
    Company() {
        return cy.get("[id='Company']")
    }
    OIB() {
        return cy.get("[id='CompanyOIB']")
    }
    Email() {
        return cy.get("[id='CompanyEmail']")
    }
    Telephone() {
        return cy.get("[id='CompanyTelephone']")
    }
    ContactPerson() {
        return cy.get("[id='CompanyContactPerson']")
    }
    CompanyAddress() {
        return cy.get("[id='CompanyAddress']")
    }
    CompanyPostalCode() {
        return cy.get('[for="CompanyZipPostalCode"]').parent().find("[class='ui-autocomplete-input']")
    }
    CompanyPostalCodeList() {
        return cy.get("[class='ui-corner-all']").contains("10040 ZAGREB - DUBRAVA, Croatia")
    }
    CompanyCountryId_dropdown() {
        return cy.get("[id='CompanyCountryId_dropdown']")
    }
    Male() {
        return cy.get("[id='gender-male']")
    }
    Female() {
        return cy.get("[id='gender-female']")
    }
    FirstName() {
        return cy.get("[id='FirstName']")
    }
    LastName() {
        return cy.get("[id='LastName']")
    }
    DateOfBirthDay() {
        return cy.get("[name='DateOfBirthDay']")
    }
    DateOfBirthMonth() {
        return cy.get("[name='DateOfBirthMonth']")
    }
    DateOfBirthYear() {
        return cy.get("[name='DateOfBirthYear']")
    }
    Email() {
        return cy.get("[id='Email']")
    }
    StreetAddress() {
        return cy.get("[id='StreetAddress']")
    }
    PostalCode() {
        return cy.get('[for="ZipPostalCode"]').parent().find("[class='ui-autocomplete-input']")
    }
    PostalCodeList() {
        return cy.get("[class='ui-corner-all']").contains("10000 ZAGREB, Croatia")
    }
    City() {
        return cy.xpath("[id='fd7e5f71-2d18-4767-bf79-aa86f3f42c40']")
    }
    CityList() {
        return cy.get("ui-id-1")
    }
    Country() {
        return cy.get("[id='CountryId_dropdown']")
    }
    Phone() {
        return cy.get("[id='Phone']")
    }
    Newsletter() {
        return cy.get("[id='Newsletter']")
    }
    Password() {
        return cy.get("[id='Password']")
    }
    ConfirmPassword() {
        return cy.get("[id='ConfirmPassword']")
    }
    Submit() {
        return cy.get("[id='register-button']")
    }
}
export default linksRegistration