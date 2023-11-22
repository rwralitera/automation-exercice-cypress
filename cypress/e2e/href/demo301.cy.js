describe('Test des liens href', () => {
  it('Vérifie que tous les liens href fonctionnent avec une réponse 200 OK', () => {
    cy.visit('https://www.facebook.com/')




    

    cy.get('a[href]').each((lien) => {
      cy.request({
        url: lien.prop('href'),
        followRedirect: false,
      }).then((response) => {
        if (response.status === 301 || response.status === 302) {
          cy.request(response.headers.location).then((redirectedResponse) => {
            expect(redirectedResponse.status).to.eq(200);
          });
        } else {
          expect(response.status).to.eq(200);
        }
      });
    });
  });
});
