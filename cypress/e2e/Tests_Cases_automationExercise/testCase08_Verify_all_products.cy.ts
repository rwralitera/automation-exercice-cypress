/// <reference types="cypress" />
import { NavbarPage, selectors } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import { productSelectors } from '../pageObject/productPage'

describe('Test Case 8: Verify All Products and product detail page', () => {
  it('Test Case 8: Verify All Products and product detail page', () => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
    navbarPage.goToProduct()
    cy.get(productSelectors.viewProduct).eq(0).click()
    cy.url().should('eq', 'https://automationexercise.com/product_details/1')
    //verify details are visible: product name, category, price, availability, condition, brand
    cy.get(productSelectors.productTitle).should('be.visible')
    cy.get(productSelectors.productCategory).should('be.visible')
    cy.get(productSelectors.productPrice).should('be.visible')
    cy.get(productSelectors.productAvailability).should('be.visible')
    cy.get(productSelectors.productCondition).should('be.visible')
    cy.get(productSelectors.productBrand).should('be.visible')
  })
})
