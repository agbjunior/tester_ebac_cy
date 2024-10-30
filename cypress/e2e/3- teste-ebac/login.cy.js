/// <reference types= "cypress" />

describe('Funcionalidade', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type ('juan@teste.com.br')
        cy.get('#password').type('juan123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, juan (não é juan? Sair)')
    })
})