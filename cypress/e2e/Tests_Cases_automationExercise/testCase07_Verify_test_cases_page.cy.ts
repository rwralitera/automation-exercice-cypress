/// <reference types="cypress" />
import { NavbarPage, selectors } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()
describe('Test Case 7: Verify Test Cases Page', () => {
  it('Test Case 7: Verify Test Cases Page', () => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
    navbarPage.goToTestCases()
  })
})
