/// <reference types="cypress" />
import { NavbarPage, selectors } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import { productSelectors } from '../pageObject/productPage'
describe('Test Case 13: Verify Product quantity in Cart', () => {
  it('Test Case 13: Verify Product quantity in Cart', () => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
    navbarPage.goToProduct()
    cy.get(productSelectors.viewProduct).eq(0).click()
    cy.url().should('eq', 'https://automationexercise.com/product_details/1')
    cy.get(productSelectors.detailQuantity).type('4')
    cy.get(productSelectors.btnAddToCart).click()
    cy.get(productSelectors.viewCart).click()
    cy.get('#product-1').should('be.visible')
    cy.get('#product-1 .cart_quantity .disabled')
      .contains('4')
      .should('be.visible')
  })
})
