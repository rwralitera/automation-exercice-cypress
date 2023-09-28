/// <reference types="cypress" />
import { homeSelectors } from '../../../pageObject/homePage'

describe('Testing the Carousel movement', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(homeSelectors.homeIdentifier).should('be.visible')
  })
  //WEL-T802
  it('S01: should have the Carousel automatically scrolling every 3 seconds', () => {
    cy.get(homeSelectors.carouselItem).first().should('have.class', 'active')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000)
    cy.get(homeSelectors.carouselItem)
      .first()
      .should('not.have.class', 'active')
    cy.get(homeSelectors.carouselItem).eq(1).should('have.class', 'active')
  })
  //WEL-T803
  it('S02: when I click on the right button of the carousel I should have the following slide appear', () => {
    cy.get(homeSelectors.carouselItem).first().should('have.class', 'active')
    cy.get(homeSelectors.carouselButtonRight).click()
    cy.get(homeSelectors.carouselItem)
      .first()
      .should('not.have.class', 'active')
    cy.get(homeSelectors.carouselItem).eq(1).should('have.class', 'active')
  })
  //WEL-T804
  it('S03: when I click on the left button of the carousel I should have the previous slide appear', () => {
    cy.get(homeSelectors.carouselItem).first().should('have.class', 'active')
    cy.get(homeSelectors.carouselButtonLeft).click()
    cy.get(homeSelectors.carouselItem).last().should('have.class', 'active')
  })

  //WEL-T864
  it('S07: when hovering the mouse over the carousel, I should have the carousel come to a standstill', () => {
    cy.get(homeSelectors.carouselItem).first().should('have.class', 'active')
    cy.get(homeSelectors.carouselInner).first().trigger('mouseover')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000)
    cy.get(homeSelectors.carouselItem).first().should('have.class', 'active')
  })
})
