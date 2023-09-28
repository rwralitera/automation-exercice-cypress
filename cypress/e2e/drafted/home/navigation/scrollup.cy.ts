/// <reference types="cypress" />
import { homeSelectors } from '../../../pageObject/homePage'
describe('Scrollup button test', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(homeSelectors.homeIdentifier).should('be.visible')
  })
  //WEL-T833
  it('S03: When I scroll a page a scroll up should appear on the lower right part of the screen', () => {
    cy.window().scrollTo(0, 500)
    cy.get(homeSelectors.scrollup).should('be.visible')
    cy.get(homeSelectors.scrollup).should('have.css', 'bottom', '0px')
    cy.get(homeSelectors.scrollup).should('have.css', 'right', '10px')
  })
  //WEL-T834
  it.only('S04 : When I click on the "scrollup" I should be redirected to the top of the page', () => {
    cy.window().scrollTo('bottom')
    cy.get(homeSelectors.scrollup).should('be.visible')
    cy.get(homeSelectors.scrollup).click()
    cy.get(homeSelectors.navbarIdentifier).should('be.visible')
  })
})
