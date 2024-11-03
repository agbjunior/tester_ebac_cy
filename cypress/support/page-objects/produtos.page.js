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

    visitarProduto(nomeProduto){
        //cy.visit(`produtos/${nomeProduto}`)
        const urlFormatada = nomeProduto.replace(/ /g, '-')
        cy.visit(`produtos/${urlFormatada}`)
    }

    addProdutoLista() {
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-White').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()
    }

    verCarrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()

    }
}

export default new ProdutosPage()