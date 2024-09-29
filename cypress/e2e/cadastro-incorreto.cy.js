describe('Página de Cadastro', () => {
  beforeEach( () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
  })
    it('Deve preencher os campos do formulário incorretamente e exibir mensagem ao usuário', () => {
      cy.contains('button', 'Cadastrar').click();
      cy.contains('p', 'É necessário informar um endereço de email').should('be.visible');
      cy.contains('p', 'Crie uma senha').should('be.visible');
      cy.contains('p', 'Repita a senha criada acima').should('be.visible');

    })
  
  
  
  })