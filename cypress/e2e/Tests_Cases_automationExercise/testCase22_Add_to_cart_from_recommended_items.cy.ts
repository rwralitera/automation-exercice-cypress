/// <reference types="cypress" />
let num = 1
describe('Test Case 22: Add to cart from Recommended items', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.url().should('eq', 'https://automationexercise.com/')
  })

  it('Tests Case 22: Add to cart from Recommended items', () => {
    // 3. Scroll to the bottom of page
    cy.scrollTo('bottom')
    // 4. Verify 'RECOMMENDED ITEMS' are visible
    cy.get('.recommended_items > .title').should('contain', 'recommended items')
    // 5. Click on 'Add To Cart' on Recommended product
    cy.get(
      '.active > :nth-child(' +
        num +
        ') > .product-image-wrapper > .single-products > .productinfo > .btn',
    ).click()
    // 6. Click on 'View Cart' button
    cy.get('u:contains("View Cart")').click()
    // 7. Verify that product is displayed in cart page
    cy.get('#product-4').should('be.visible')
  })
})
