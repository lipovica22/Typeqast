import login from '../mapping/loginP.js';
const loginP = new login();
import LOB from '../mapping/LOBP.js';
const LOBP = new LOB();
import products from '../mapping/productsP.js';
const productsP = new products();
import General from '../mapping/GeneralP.js';
const GeneralP = new General();
import Person from '../mapping/PersonP.js';
const PersonP = new Person();
import Iframe from '../mapping/Iframe.js';
const IframeP = new Iframe();
describe('1 QA RS TEST', () => {

  it('Login', () => {
    cy.log("Login")
    cy.viewport(1280, 720)
    cy.visit("https://t-score.uniqa.rs/POS/Serbia/NoAD")
  
    loginP.username().type('sCoreUW')
    loginP.password().type('OvoJ3Test')
    loginP.submit().click()
    
    cy.log("LOB selection")
    LOBP.lifeB().click() 

    cy.log("Product selection")
    productsP.rizikoB().click()
    cy.get("#ribbon_menu_area").click()
    cy.get("#mCSB_1_container").contains("Novi dokument").click()
    cy.get("#mCSB_1_container").contains("Novi ugovor").click()

    cy.log("Info offer - tab General")
    //GeneralP.ClientInfo().type('test')
    GeneralP.Duration().clear().type("10")
    //GeneralP.States().clear().type("Srbija")
    GeneralP.Places().type("Beograd")
    GeneralP.PlacesList().contains("11000 Beograd").click()
    GeneralP.PaymentDynamik().select("Godišnje")
    GeneralP.FXClause().select("Da")
    GeneralP.PaymentMethod().select("Uplatnica")



    cy.log("Info offer - tab Person")
    cy.get("#tab_Persons").click()
    //PersonP.SamePerson().click()
    PersonP.AddPolicyHolder().click()
    cy.wait(2000)
    IframeP.JMBG().type("3107978")
    IframeP.SearchFL().click()



  })
})  

