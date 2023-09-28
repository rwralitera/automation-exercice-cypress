/// <reference types="cypress" />
import { NavbarPage, selectors } from '../../pageObject/navbarPage'
const navbar = new NavbarPage()

describe('Test cases navigation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
  })
  //WEL-T839
  it("S01 : La liste des Test cases devrait être constituée s'une liste d'éléments déroulantes non déroulés", () => {
    navbar.goToTestCases()
    cy.get(selectors.testCaseList).should('be.visible')
    // vérifier que les listes déroulantes ne sont pas déroulés,
    cy.get(selectors.testCaseListCollapse).each(($el) => {
      cy.wrap($el).should('have.class', 'collapse')
    })
  })

  it("S02 : Quand je click sur un élément de la liste l'élément en question devrait se dérouler", () => {
    navbar.goToTestCases()
    cy.get(selectors.testCaseList).should('be.visible')
    //choisir au hasard un des 26 liens à cliquer
    const min = 1
    const max = 26
    cy.wrap(Math.floor(Math.random() * (max - min + 1) + min)).as(
      'randomNumber',
    )
    cy.get('@randomNumber').then((i) => {
      cy.get('[href="#collapse' + i + '"]').click()
      cy.get('#collapse' + i).should('have.class', 'in')
    })
  })
  it('S03 : Vérifie que le lien de messagerie redirige vers le logiciel de messagerie', () => {
    navbar.goToAPITesting()

    // Sélectionner le lien de messagerie
    cy.get(selectors.mailtoLink)
      .should('have.attr', 'href')
      .and('include', 'mailto:')
  })
})
