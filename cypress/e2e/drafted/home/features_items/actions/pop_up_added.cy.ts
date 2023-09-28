/// <reference types="cypress" />
import { homeSelectors } from '../../../../pageObject/homePage'
import { productSelectors } from '../../../../pageObject/productPage'
import { selectors } from '../../../../pageObject/navbarPage'
describe('Pop-up card modal "Added"', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(homeSelectors.homeIdentifier).should('be.visible')
  })
  //WEL-T817
  it('S08: On the "Added!" I should have a "Continue Shopping" button and a "View Cart" button', () => {
    cy.get(productSelectors.addProduct).eq(2).first().click()
    cy.get(productSelectors.modalContent).should('be.visible')
    cy.get(productSelectors.continueButton).should('be.visible')
    cy.get(productSelectors.viewCart).should('be.visible')
  })
  //WEL-T818
  it('S09: Pop-up card modal disappear after click on "Continue shopping" button', () => {
    cy.get(productSelectors.addProduct).eq(2).first().click()
    cy.get(productSelectors.modalContent).should('be.visible')
    cy.get(productSelectors.continueButton).click()
    cy.get(productSelectors.modalContent).should('have.css', 'display', 'none')
  })
  //WEL-T819
  it('S10: On click on the Pop-up card modal button "View cart" I am redirected to', () => {
    cy.get(productSelectors.addProduct).eq(2).first().click()
    cy.get(productSelectors.modalContent).should('be.visible')
    cy.get(productSelectors.viewCart).click()
    cy.get(selectors.cartIdentifier).should('be.visible')
  })
})
