import { beforeEach } from 'mocha';
import {usuarios} from '../fixtures/usuarios.json';

describe( 'Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a', 'Cadastrar').click();
    })
    usuarios.forEach(usuario => {
        it('Deve preencher os campos corretamente para cadastrar um novo usuário',
            () => {
                cy.get('[data-test="input-name"]').type(usuario.name);
                cy.get('[data-test="input-email"]').type(usuario.email);
                cy.get('[data-test=input-password]').type(usuario.password);
                cy.get('[data-test="input-confirm-password"]').type(usuario.password);
                cy.get('[data-test="submit-button"]').click();
            }
        )
    })
})