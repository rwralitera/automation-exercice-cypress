const selectors = {
  nameDelivery: '#address_delivery .address_lastname',
  addressDelivery: '#address_delivery .address_city',
  phoneDelivery: '#address_delivery .address_phone',
  nameBilling: '#address_invoice .address_lastname',
  addressBilling: '#address_invoice .address_city',
  phoneBilling: '#address_invoice .address_phone',
}
class VerificationPage {
  addressDelivery(
    title: string,
    name: string,
    lastName: string,
    state: string,
    city: string,
    zipCode: string,
    phoneNumber: string,
  ) {
    cy.get(selectors.nameDelivery)
      .should('contain', title)
      .should('contain', name)
      .should('contain', lastName)
    cy.get(selectors.addressDelivery)
      .should('contain', state)
      .should('contain', city)
      .should('contain', zipCode)
    cy.get(selectors.phoneDelivery).should('contain', phoneNumber)
  }
  addressBilling(
    title: string,
    name: string,
    lastName: string,
    state: string,
    city: string,
    zipCode: string,
    phoneNumber: string,
  ) {
    cy.get(selectors.nameBilling)
      .should('contain', title)
      .should('contain', name)
      .should('contain', lastName)
    cy.get(selectors.addressBilling)
      .should('contain', state)
      .should('contain', city)
      .should('contain', zipCode)
    cy.get(selectors.phoneBilling).should('contain', phoneNumber)
  }
}

export default VerificationPage
