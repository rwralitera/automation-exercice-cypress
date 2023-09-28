/// <reference types="cypress" />
import { NavbarPage, selectors } from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()

describe('Contact_us navigation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
  })
  //WEL-T839
  it("S01 : Sur la page 'contact_us' je devrais avoir un formulaire 'Get in touch'", () => {
    navbar.goToContactUs()
    cy.get(selectors.contactUsGetintouch).should('be.visible')
  })

  it("S02 : Sur la page 'contact_us' je devrais avoir une section 'feedback for us", () => {
    navbar.goToContactUs()
    cy.get(selectors.contactUsFeedback).should('be.visible')
  })

  it('S03 : Vérifie que le lien de messagerie redirige vers le logiciel de messagerie', () => {
    navbar.goToAPITesting()

    // Sélectionner le lien de messagerie
    cy.get(selectors.mailtoLink)
      .should('have.attr', 'href')
      .and('include', 'mailto:')
  })

  it("S04 : Télécharge un fichier et vérifier qu'il est bien uploadé ", () => {
    navbar.goToContactUs()
    cy.get(selectors.inputFile).selectFile('invoice.txt')
    //verification
    cy.get(selectors.inputFile)
      .should('have.prop', 'files')
      .and('have.length', 1)
      .its('0')
  })
})
