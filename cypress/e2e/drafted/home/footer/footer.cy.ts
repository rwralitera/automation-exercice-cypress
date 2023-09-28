/// <reference types="cypress" />
import { NavbarPage } from '../../../pageObject/navbarPage'
const navbar = new NavbarPage()
import { homeSelectors } from '../../../pageObject/homePage'

describe(' On each page I should have the Footer section', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    cy.get(homeSelectors.homeIdentifier).should('be.visible')
  })
  //WEL-T829
  it('S01: On Home page', () => {
    cy.window().scrollTo('bottom')
    cy.get(homeSelectors.footerIdentifier).should('be.visible')
    cy.get(homeSelectors.footerTitle).should('be.visible')
    cy.get(homeSelectors.footerField).should('be.visible')
    cy.get(homeSelectors.footerButton).should('be.visible')
  })
  //WEL-T829
  it('S01: On Products page', () => {
    navbar.goToProduct()
    cy.window().scrollTo('bottom')
    cy.get(homeSelectors.footerIdentifier).should('be.visible')
    cy.get(homeSelectors.footerTitle).should('be.visible')
    cy.get(homeSelectors.footerField).should('be.visible')
    cy.get(homeSelectors.footerButton).should('be.visible')
  })
  //WEL-T829
  it('S01:  : On Cart page', () => {
    navbar.goToCart()
    cy.window().scrollTo('bottom')
    cy.get(homeSelectors.footerIdentifier).should('be.visible')
    cy.get(homeSelectors.footerTitle).should('be.visible')
    cy.get(homeSelectors.footerField).should('be.visible')
    cy.get(homeSelectors.footerButton).should('be.visible')
  })
  //  WEL-T829
  it('S01: On SignUp/Login page', () => {
    navbar.goToSignup()
    cy.window().scrollTo('bottom')
    cy.get(homeSelectors.footerIdentifier).should('be.visible')
    cy.get(homeSelectors.footerTitle).should('be.visible')
    cy.get(homeSelectors.footerField).should('be.visible')
    cy.get(homeSelectors.footerButton).should('be.visible')
  })
  //WEL-T829
  it('S01:  On Test cases page', () => {
    navbar.goToTestCases()
    cy.window().scrollTo('bottom')
    cy.get(homeSelectors.footerIdentifier).should('be.visible')
    cy.get(homeSelectors.footerTitle).should('be.visible')
    cy.get(homeSelectors.footerField).should('be.visible')
    cy.get(homeSelectors.footerButton).should('be.visible')
  })
  //WEL-T829
  it('S01:  On API testing page', () => {
    navbar.goToAPITesting()
    cy.window().scrollTo('bottom')
    cy.get(homeSelectors.footerIdentifier).should('be.visible')
    cy.get(homeSelectors.footerTitle).should('be.visible')
    cy.get(homeSelectors.footerField).should('be.visible')
    cy.get(homeSelectors.footerButton).should('be.visible')
  })
  //WEL-T829
  it('S01: On Contact us page', () => {
    navbar.goToContactUs()
    cy.window().scrollTo('bottom')
    cy.get(homeSelectors.footerIdentifier).should('be.visible')
    cy.get(homeSelectors.footerTitle).should('be.visible')
    cy.get(homeSelectors.footerField).should('be.visible')
    cy.get(homeSelectors.footerButton).should('be.visible')
  })
})
