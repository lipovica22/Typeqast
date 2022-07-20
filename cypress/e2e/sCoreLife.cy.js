import login from '../mapping/loginP.js';
const loginP = new login();
import LOB from '../mapping/LOBP.js';
const LOBP = new LOB();
import products from '../mapping/productsP.js';
import { equal } from 'assert';
const productsP = new products();

describe('1 QA RS TEST', () => {

  it('Login', () => {
    cy.visit("https://t-score.uniqa.rs/POS/Serbia/NoAD")
    loginP.username().type('sCoreUW')
    loginP.password().type('OvoJ3Test')
    loginP.submit().click()
    //cy.wait(5000)
  })

  it('2 LOB Selection', () => {
    //cy.get(".ico_life").should("exist")
    LOBP.lifeB().click()
    cy.wait(2000)
  })
  
  it('3 Life product selection', () => {
    cy.get("[class='box_product hvr-grow ico_riziko']").should("exist")
    //productsP.rizikoB().click()
    //cy.wait(2000)
    cy.visit("https://t-score.uniqa.rs/POS/Serbia/Life/Riziko/InfoOffer/New/General")
    //cy.get("[class='box_product hvr-grow ico_riziko']").click()
  })

  //it('4 Riziko product InfoOffer', () => {
    //cy.get("[class='box_product hvr-grow ico_riziko']").should("exist")
    //productsP.rizikoB().click()
  //})
})  

