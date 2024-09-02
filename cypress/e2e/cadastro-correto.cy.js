describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Janaina');
    cy.get('input[name="email"]').type('janavieira@hotmail.com');
    cy.get('input[name="password"]').type('Teste123');
    cy.get('input[name="confirm_password"]').type('Teste123');
    cy.contains('button', 'Cadastrar').click();
  })




})