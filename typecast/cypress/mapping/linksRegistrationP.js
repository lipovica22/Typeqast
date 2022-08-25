class linksRegistration {
    Title() {
        return cy.get("[class='page-title']")
    }
    Message() {
        return cy.get("[class='page-title']").parent().find("div").eq(1)
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
    CompanyError() {
        return cy.get("[data-valmsg-for='Company']").invoke('text')
    }
    OIB() {
        return cy.get("[id='CompanyOIB']")
    }
    OIBError() {
        return cy.get(".field-validation-error[data-valmsg-for='CompanyOIB']").invoke('text')
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
    CompanyAddressError() {
        return cy.get(".field-validation-error[data-valmsg-for='CompanyAddress']").invoke('text')
    }
    CompanyPostalCode() {
        return cy.get('[for="CompanyZipPostalCode"]').parent().find("[class='ui-autocomplete-input']")
    }
    CompanyPostalCodeError() {
        return cy.get(".field-validation-error[data-valmsg-for='CompanyZipPostalCode']").invoke('text')
    }
    CompanyPostalCodeList() {
        return cy.get("[class='ui-corner-all']").contains("10040 ZAGREB - DUBRAVA, Croatia")
    }
    CompanyCity() {
        return cy.get("[class='ui-corner-all']").contains("10040 ZAGREB - DUBRAVA, Croatia")
    }
    CompanyCityError() {
        return cy.get(".field-validation-error[data-valmsg-for='CompanyCity']").invoke('text')
    }
    CompanyCountryId_dropdown() {
        return cy.get("[id='CompanyCountryId_dropdown']")
    }
    CompanyCountryId_dropdownError() {
        return cy.get(".field-validation-error[data-valmsg-for='CompanyCountryId']").invoke('text')
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
    FirstNameError() {
        return cy.get("span[for='FirstName']").invoke('text')
    }
    LastName() {
        return cy.get("[id='LastName']")
    }
    LastNameError() {
        return cy.get("span[for='LastName']").invoke('text')
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
    EmailError() {
        return cy.get("span[for='Email']").invoke('text')
    }
    StreetAddress() {
        return cy.get("[id='StreetAddress']")
    }
    
    PostalCode() {
        return cy.get('[for="ZipPostalCode"]').parent().find("[class='ui-autocomplete-input']")
    }
    PostalCodeList() {
        return cy.get("[class='ui-corner-all']")
    }
    City() {
        return cy.get('[for="City"]').parent().find("[class='ui-autocomplete-input']")
    }
    CitySelected() {
        return cy.get('[id="City"]').invoke('val')
    }
    CityList() {
        return cy.get("[class='ui-corner-all']").contains("51000 RIJEKA, Croatia")
    }
    CountryList() {
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
    PasswordError() {
        return cy.get("span[for='Password']").invoke('text')
    }
    ConfirmPasswordError() {
        return cy.get("span[for='ConfirmPassword']").invoke('text')
    }
    Submit() {
        return cy.get("[id='register-button']")
    }
    Error() {
        return cy.get("[class='validation-summary-errors']").invoke('text')
    }
    URL() {
        return cy.get("[class='mr-12px leading-normal max-w-100% text-indigo-500 self-center hocus-link-default truncate']")
    }
    Confirmation() {
        return cy.get("[class='result']").invoke('text')
    }
    Continue() {
        return cy.get("[class='button-1 register-continue-button']")
    }
}
export default linksRegistration