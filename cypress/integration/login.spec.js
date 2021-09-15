/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')
context('Funcionalidade Login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta') //visitou uma url para testar
    });
    
   afterEach(() => {
       cy.screenshot()
   });

    it('Deve fazer o login com sucesso', () =>{
       
        cy.get('#username').type('aluno_ebac@teste.com') // digitou um login válido
        cy.get('#password').type('teste@teste.com') // digitou uma senha válida
        cy.get('.woocommerce-form > .button').click() // clicou no botao de acesso

        cy.get('.page-title').should('contain', 'Minha conta') // acessou a pagina do usuario
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac ')
    })

    it('Deve fazer login com sucesso - Usando arquivos de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha) 
        cy.get('.woocommerce-form > .button').click() 

        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it.only('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, {log: false}) 
            cy.get('.woocommerce-form > .button').click() 

            cy.get('.page-title').should('contain', 'Minha conta')


        })
    });
    
    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () =>{
       
        cy.get('#username').type('ebac@teste.com') //digitou um login inválido
        cy.get('#password').type('teste@teste') // digitou uma senha inválida
        cy.get('.woocommerce-form > .button').click() // clicou no  botao de acesso

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
       
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    })

})