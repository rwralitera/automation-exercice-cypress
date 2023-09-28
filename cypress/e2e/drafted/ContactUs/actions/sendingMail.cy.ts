/// <reference types="cypress" />
import { NavbarPage } from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()
import { selectors } from '../../../pageObject/contactPage'

describe('send an email via the mailto link', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
  })
  //WEL-T858
  it('S01: When I click on the email address I should be redirected to the messaging application to send an email to the address', () => {
    navbar.goToContactUs()
    cy.get(selectors.emailLink).should('be.visible')
  })
  // WEL-T909
  it('S05 : Mandatory fields must be marked with an asterisk', () => {
    navbar.goToContactUs()
    cy.get(selectors.required) //FIXME: .should('contain', '*')
  })
})
