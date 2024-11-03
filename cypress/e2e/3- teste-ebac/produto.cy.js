/// <reference types = 'cypress'/>

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produto', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl('product')
    });
    
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Ingrid Running Jacket')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
        cy.get('.product_title').should('contain', 'Ingrid Running Jacket')
    });
    it('Deve visitar a pagina do produto especifico ', () => {
        produtosPage.visitarProduto('ingrid running jacket')
        cy.get('.product_title').should('contain', 'Ingrid Running Jacket')

    });
    it('Deve add o produto ao carrinho', () => {
        produtosPage.buscarProduto('Ingrid Running Jacket')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
        produtosPage.addProdutoLista()
    });

    it.only('Deve add o produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
            produtosPage.verCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade )
            cy.get('.product-name > a').should('contain', dados[0].nomeProduto) 
        });
    })

    it('Deve ir para o carrinho', () => {
        produtosPage.buscarProduto('Ajax Full-Zip Sweatshirt')
        cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
        produtosPage.verCarrinho('L', 'Blue', 3)

    });
})