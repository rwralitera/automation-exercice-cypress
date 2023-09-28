/// <reference types="cypress" />
import { homeSelectors } from '../../../../pageObject/homePage'
describe('View Category Products', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(homeSelectors.homeIdentifier).should('be.visible')
  })
  //WEL-T821-822-823
  it('S01 S02 S03:should be able to navigate between the different categories', () => {
    //Verify that categories are visible on left side bar
    cy.get(homeSelectors.categoryIdentifier).should('be.visible')
    cy.get(homeSelectors.womenLabel).click()
    cy.get(homeSelectors.womenChild).first().click()
    // Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    cy.get(homeSelectors.titleIdentifier)
      .contains('Women - Dress Products')
      .should('be.visible')
    // On left side bar, click on any sub-category link of 'Men' category
    cy.get(homeSelectors.menIdentifier).click()
    cy.get(homeSelectors.menChild).eq(1).click()
    // Verify that user is navigated to that category page
    cy.get(homeSelectors.titleIdentifier)
      .contains('Men - Jeans Products')
      .should('be.visible')
  })
})
