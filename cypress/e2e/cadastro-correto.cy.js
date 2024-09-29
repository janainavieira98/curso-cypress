describe('Página de Cadastro', () => {
  beforeEach( () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
  })
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.get('input[name="nome"]').type('Janaina');
    cy.get('input[name="email"]').type('janavieira@hotmail.com');
    cy.get('input[name="password"]').type('Teste123');
    cy.get('input[name="confirm_password"]').type('Teste123');
    cy.contains('button', 'Cadastrar').click();
  })




})