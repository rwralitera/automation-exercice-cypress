describe('Test des liens href', () => {
  it('Vérifie que tous les liens de la page fonctionnent et renvoient une réponse 200 OK', () => {
    cy.visit('https://www.automationexercise.com/');

    cy.get('a[href]').each((lien) => {
      cy.request(lien.prop('href')).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });
});
