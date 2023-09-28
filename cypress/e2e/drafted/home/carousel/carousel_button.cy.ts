/// <reference types="cypress" />
import { NavbarPage, selectors } from '../../../pageObject/navbarPage'
import { homeSelectors } from '../../../pageObject/homePage'
const navBarPage = new NavbarPage()

describe('Carousel buttons test', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(homeSelectors.homeIdentifier).should('be.visible')
  })

  //WEL-T863
  it('S06: I should have the Test cases and API Testing buttons on the carousel slide', () => {
    cy.get(homeSelectors.carouselTestCaseButton).should('be.visible')
    cy.get(homeSelectors.carouselAPITestingButton).should('be.visible')
  })
  //WEL-T805 - WEL-T806
  it('S04: when I click on one of the buttons I should be redirected to the corresponding page', () => {
    cy.get(homeSelectors.carouselTestCaseButton).click()
    cy.get(selectors.testCasesIdentifier).should('be.visible')
    navBarPage.goToHome()
    cy.get(homeSelectors.carouselAPITestingButton).click()
    cy.get(selectors.APITestingIdentifier).should('be.visible')
  })
})
