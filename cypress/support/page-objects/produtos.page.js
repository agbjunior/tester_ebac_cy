class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        cy.get('[name="s"]').eq(1).type(nomeProduto)
        cy.get('[type="submit"]').eq(1)
    }

    buscarProdutoLista(nomeProduto){
        cy.get('.products > .row')
        .contains (nomeProduto)
        .click()
    }

    visitarProduto(){


    }

    addProdutoLista() {

    }
}

export default new ProdutosPage()