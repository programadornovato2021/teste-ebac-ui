/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {
    
    beforeEach(() => {     //acessa antes dos testes
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
           // .first()
           //.eq(3)
           .contains('Ariel Roll Sleeve Sweatshirt')
           .click()
    });

    it('Deve adicionar um produto no carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
            cy.get('.button-variable-item-M').click()
            cy.get('.button-variable-item-Purple').click()
            cy.get('.input-text').clear().type(quantidade)
            cy.get('.single_add_to_cart_button').click()

            cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
            cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 3)
    });
});