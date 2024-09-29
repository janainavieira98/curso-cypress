describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a', 'Fazer login').click();
    })
    it('Deve preencher os campos do formulário incorretamente e exibir mensagem ao usuário', () => {
      cy.get('[data-test="submit-button"]').click();
      cy.contains('p', 'É necessário informar um endereço de email').should('be.visible');
      cy.contains('p', 'Insira sua senha').should('be.visible');
    })
  

  })