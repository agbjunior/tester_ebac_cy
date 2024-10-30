/// <reference types= "cypress" />

describe('Funcionalidade', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

afterEach(() => {
    cy.screenshot()
});

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type ('juan@teste.com.br')
        cy.get('#password').type('juan123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, juan (não é juan? Sair)')
    })

    it('Deve aparecer ERRO ao digitar login inválido', () => {
        cy.get('#username').type ('juanjuan@teste.com.br')
        cy.get('#password').type('juan123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    });

    it('Deve aparecer ERRO ao digitar senha inválida', () => {
        cy.get('#username').type ('juan@teste.com.br')
        cy.get('#password').type ('joedosurf')
        cy.get('.woocommerce-form > .button').click()

        'Erro: A senha fornecida para o e-mail juan@teste.com.br está incorreta. Perdeu a senha?'

        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida')
    })
})