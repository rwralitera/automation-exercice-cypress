export function waitForAPI(method?: string) {
  if (method !== undefined) {
    cy.wait(`@api${method}`);
  } else {
    cy.wait('@apiGet');
    cy.wait('@apiPost');
  }
}

export function registerApiAlias() {
  cy.intercept('GET', '**/api/**').as('apiGet');
  cy.intercept('POST', '**/api/**').as('apiPost');
}
