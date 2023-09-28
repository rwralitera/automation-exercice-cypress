/// <reference types="cypress" />
import { NavbarPage, selectors } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
import SearchPage from '../pageObject/searchPage'
const searchPage = new SearchPage()

const search_item = 'Jeans'
describe('Test Case 9: Search Product', () => {
  it('Test Case 9: Search Product', () => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
    navbarPage.goToProduct()
    searchPage.searchItem(search_item)
  })
})
