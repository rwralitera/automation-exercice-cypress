const selectors = {
  nameCard: '[data-qa="name-on-card"]',
  numberCard: '[data-qa="card-number"]',
  cvcCard: '[data-qa="cvc"]',
  monthCard: '[data-qa="expiry-month"]',
  yearCard: '[data-qa="expiry-year"]',
  buttonPayment: '#submit',
  successMessage: '#success_message',
}

class PaymentPage {
  fillPaymentForm(
    name: string,
    lastName: string,
    cardNumber: string,
    cvc: string,
    month: string,
    year: string,
  ) {
    cy.get(selectors.nameCard).type(name + ' ' + lastName)
    cy.get(selectors.numberCard).type(cardNumber)
    cy.get(selectors.cvcCard).type(cvc)
    cy.get(selectors.monthCard).type(month)
    cy.get(selectors.yearCard).type(year)
    cy.get(selectors.buttonPayment).click()
  }
}

export default PaymentPage
