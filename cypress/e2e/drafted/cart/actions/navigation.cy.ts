/// <reference types="cypress" />
import { NavbarPage, selectors } from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()
import { cartSelectors } from '../../../pageObject/cartPage'
describe('S01: Cart navigation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
  })
  //WEL-T839
  it('S01: When Cart is empty I should have a message "Cart is empty! Click here to buy products."', () => {
    navbar.goToCart()
    cy.get(cartSelectors.emptyCart).should('have.css', 'display', 'block')
    cy.get(cartSelectors.clickHere).click()
    cy.get(selectors.productIdentifier).should('be.visible')
  })
})
