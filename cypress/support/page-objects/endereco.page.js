
class EnderecoPage{

    editarEnderecoFaturamento() {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()

    }

    editarEnderecoEntrega() {

        //elementos + ações
    }
}

export default new EnderecoPage()