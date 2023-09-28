/// <reference types="cypress" />
import { homeSelectors } from '../../../../pageObject/homePage'

describe('Feature Items content', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(homeSelectors.homeIdentifier).should('be.visible')
  })
  //WEL-T807
  it('S01: should have the Section Feature Items', () => {
    cy.window().scrollTo(0, 500)
    cy.get(homeSelectors.titleIdentifier).should('contain', 'Features Items')
  })
  //WEL-T808
  it('S02: Details of each card in feature items must be available', () => {
    cy.get(homeSelectors.featureItem).scrollIntoView()
    cy.get(homeSelectors.cardImage).should('be.visible')
    cy.get(homeSelectors.cardPrice).should('be.visible')
    cy.get(homeSelectors.cardP).should('be.visible')
    cy.get(homeSelectors.cardAdd).should('be.visible')
    cy.get(homeSelectors.cardViewProduct).should('be.visible')
  })
  //WEL-T809
  it('S03: when I point my mouse on a map an overlay should appear', () => {
    //product-overlay
    cy.get(homeSelectors.featureItem).scrollIntoView()
    cy.get(homeSelectors.imageWrapper)
      .first()
      .trigger('mousedown', { timeout: 1000 })
    cy.get(homeSelectors.imageWrapper).first().should('be.visible') //FIXME : overlay n'est sélectionné
  })
})
