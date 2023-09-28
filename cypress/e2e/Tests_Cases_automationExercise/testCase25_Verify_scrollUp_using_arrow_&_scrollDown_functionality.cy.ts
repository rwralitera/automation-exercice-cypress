/// <reference types="cypress" />

describe('Test Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
    //Verify that home page is visible successfully
    cy.get('#slider').should('be.visible')
  })

  it('Tests Case 25: Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
    // 4. Scroll down page to bottom
    cy.scrollTo('bottom')
    // 5. Verify 'SUBSCRIPTION' is visible
    cy.get('#footer h2:contains("Subscription")').should('be.visible')
    // 6. Click on arrow at bottom right side to move upward
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500)
    cy.get('#scrollUp').click()
    // 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500)
    cy.window().then((win) => {
      expect(win.scrollY).to.equal(0)
    })
    cy.get(
      '.active h2:contains("Full-Fledged practice website for Automation Engineers")',
    ).should('be.visible')
  })
})
