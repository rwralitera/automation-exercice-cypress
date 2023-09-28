/// <reference types="cypress" />

import { homeSelectors } from '../../../../pageObject/homePage'

let number
// eslint-disable-next-line no-unused-vars
let count
describe('The number in brackets to the right of each brand name must be identical to the number of items corresponding to the brand', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(homeSelectors.homeIdentifier).should('be.visible')
    cy.get(homeSelectors.brandsIdentifier).scrollIntoView()
  })
  //WEL-T825
  it('S02: The number in brackets to the right of each brand name must be identical to the number of items corresponding to the brand', () => {
    cy.get(homeSelectors.firstBrandNumbers)
      .invoke('text')
      .then((value) => {
        number = value.slice(1, -1)

        cy.get(homeSelectors.firstBrandIdentifier).click()
        cy.get(homeSelectors.featureItem)
          .find(homeSelectors.cardIdentifier)
          .its('length')
          .invoke('valueOf')
          .as('count')
          .then((val) => {
            expect(val.toString()).to.equal(number)
          })
      })
  })
})
