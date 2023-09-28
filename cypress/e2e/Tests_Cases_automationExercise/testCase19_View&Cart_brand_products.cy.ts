/// <reference types="cypress" />
import { NavbarPage } from '../pageObject/navbarPage'
const navbarPage = new NavbarPage()

describe('Test Case 19: View & Cart Brand Products', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get('#slider').should('be.visible')
  })

  it('Tests Case 19: View & Cart Brand Products', () => {
    // 3. Click on 'Products' button
    navbarPage.goToProduct()
    // 4. Verify that Brands are visible on left side bar
    cy.get('.left-sidebar .brands_products h2:contains("Brands")').should(
      'be.visible',
    )
    // 5. Click on any brand name
    cy.get('.brands-name li a:contains("Allen Solly Junior")').click()
    // 6. Verify that user is navigated to brand page and brand products are displayed
    cy.get('.features_items > h2')
      .contains('Brand - Allen Solly Junior Products')
      .should('be.visible')
    // 7. On left side bar, click on any other brand link
    cy.get('.brands-name li a:contains("H&M")').click()
    // 8. Verify that user is navigated to that brand page and can see products
    cy.get('.features_items > h2')
      .contains('Brand - H&M Products')
      .should('be.visible')
  })
})
