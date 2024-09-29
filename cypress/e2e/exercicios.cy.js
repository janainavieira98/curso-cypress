describe('Exercicios', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })
    it('Verificar titutlo com texto "Adopet"', () => {
        cy.title().should('eq', 'AdoPet');
    })

    it('Verificar texto "Quem ama adota"', () => {
        cy.contains('p', 'Quem ama adota!').should('be.visible');
    });
  

  })