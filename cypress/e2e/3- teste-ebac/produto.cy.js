/// <reference types = 'cypress'/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produto', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
    it.only('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Ingrid Running Jacket')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
        cy.get('.product_title').should('contain', 'Ingrid Running Jacket')
    });
    it('Deve visitar a pagina do produto especifico ', () => {
        produtosPage.visitarProduto()
    });
    it('Deve add o produto ao carrinho', () => {
        produtosPage.addProdutoLista()
    });
})