const selectors = {
  searchProduct: '#search_product',
  searchButton: '#submit_search',
}

class SearchPage {
  searchItem(item) {
    cy.get(selectors.searchProduct).type(item)
    cy.get(selectors.searchButton).click()
    cy.get('.features_items .col-sm-4:first p:contains("' + item + '")').should(
      'be.visible',
    )
  }
}

export default SearchPage
