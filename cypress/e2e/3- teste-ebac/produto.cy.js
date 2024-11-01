/// <reference types = 'cypress'/>

describe('Funcionalidade: Produto', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        //.first()
        //.last()
        //.eq(2)
        .contains ('Aether Gym Pant')
        .click()

        cy.get('.woocommerce-product-details__short-description > p').should('contain', 'This is a variable product called a Aether Gym Pant')
    });
  
})