/// <reference types="cypress" />
import { NavbarPage, selectors } from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()
import { productSelectors } from '../../../pageObject/productPage'
describe('Search on Products page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
  })
  //WEL-T837
  it('S02: When I click on the "Search" button and the field is empty "All products" is displayed', () => {
    navbar.goToProduct()
    cy.get(productSelectors.searchField).clear()
    cy.get(productSelectors.searchButton).click()
    cy.get(selectors.productIdentifier).should('be.visible')
  })
})
