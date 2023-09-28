import { productSelectors } from './productPage'

class AddProductPage {
  addRandomProduct() {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1000)
    cy.get(productSelectors.productCard)
      .contains(productSelectors.product1)
      .siblings(productSelectors.productAdd)
      .click()
    cy.get(productSelectors.modalContent).should('be.visible', {
      timeout: 10000,
    })
    cy.get(productSelectors.continueButton).click()
    cy.get(productSelectors.productCard)
      .contains(productSelectors.product2)
      .siblings(productSelectors.productAdd)
      .click()
    cy.get(productSelectors.modalContent).should('be.visible', {
      timeout: 10000,
    })
    cy.get(productSelectors.continueButton).click()
    cy.get(productSelectors.productCard)
      .contains(productSelectors.product3)
      .siblings(productSelectors.productAdd)
      .click()
    cy.get(productSelectors.modalContent).should('be.visible', {
      timeout: 10000,
    })
    cy.get(productSelectors.continueButton).click()
  }
}

export default AddProductPage
