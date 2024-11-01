/// <reference types = 'cypress'/>
import { faker } from '@faker-js/faker';

const randomName = faker.person.firstName()
const randomLastName = faker.person.lastName()
const randomEmail = faker.internet.email(randomName, randomLastName)
const home = 'http://lojaebac.ebaconline.art.br/minha-conta/'


describe('Funcionalidade: cadastro', () => {
    
    beforeEach(() => {
        cy.visit(home)
    });

    it('Deve criar uma conta com um email novo', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('juan123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())

        cy.wait(5000)

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it.only('Deve criar uma conta com um email novo', () => {
        cy.get('#reg_email').type(randomEmail)
        cy.get('#reg_password').type('juan123')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(randomName)
        cy.get('#account_last_name').type(randomLastName)

        //cy.wait(5000)

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
});

})