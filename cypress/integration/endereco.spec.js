///<reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereço - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
       
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Flávio', 'Araujo', 'EBAC', 'sao paulo', '92', 'sao paulo', '95595000')
        cy.get('.woocommerce-message').should('contain','Endereço alterado com sucesso.')
    });
    
});