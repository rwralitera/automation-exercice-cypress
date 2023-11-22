// eslint-disable-next-line import/prefer-default-export
export function waitForSpinnerLoading() {
  cy.get('[name="spinner"]') // FIXME: change to your own spinner selector
    .should('be.visible')
    .then($load => {
      cy.wrap($load).should('not.exist');
    });
}

export function waitForClassLoading() {
  cy.get('.load') // FIXME: change to your own loader selector
    .should('be.visible')
    .then($load => {
      cy.wrap($load).should('not.exist');
    });
}