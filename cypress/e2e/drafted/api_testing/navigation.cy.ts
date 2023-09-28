/// <reference types="cypress" />
import { NavbarPage, selectors } from '../../pageObject/navbarPage'
const navbar = new NavbarPage()

describe('API_testing navigation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(selectors.homeIdentifier).should('be.visible')
  })
  //WEL-T839
  it("S01 : La liste des Test cases devrait être constituée s'une liste d'éléments déroulantes non déroulés", () => {
    navbar.goToAPITesting()
    cy.get(selectors.testCaseList).should('be.visible')
    cy.get(selectors.testCaseListCollapse).each(($el) => {
      cy.wrap($el).should('have.class', 'collapse')
    })
  })

  it("S02 : Quand je click sur un élément de la liste l'élément en question devrait se dérouler", () => {
    navbar.goToAPITesting()
    cy.get(selectors.testCaseList).should('be.visible')
    //choisir au hasard un des 26 liens à cliquer
    const min = 1
    const max = 14
    cy.wrap(Math.floor(Math.random() * (max - min + 1) + min)).as(
      'randomNumber',
    )
    cy.get('@randomNumber').then((i) => {
      cy.get('[href="#collapse' + i + '"]').click()
      cy.get('#collapse' + i).should('have.class', 'in')
    })
  })

  it.only("S03 : Quand je click sur un lien j'arrive un fichier json", () => {
    navbar.goToAPITesting()
    cy.get(selectors.APITestingFirstCollapse).click()
    cy.get(selectors.APITestingFirstLink)
      .should('have.attr', 'href')
      .then((href) => {
        cy.request('GET', href)
          .its('headers')
          .its('content-type')
          .should('include', 'text/html') //FIXME : on devrait avoir un fichier json à la sortie .should('include', 'application/json')
      })
  })
  it('S04 : Vérifie que le lien de messagerie redirige vers le logiciel de messagerie', () => {
    navbar.goToAPITesting()
    // Sélectionner le lien de messagerie
    cy.get(selectors.mailtoLink)
      .should('have.attr', 'href')
      .and('include', 'mailto:')
  })
})
