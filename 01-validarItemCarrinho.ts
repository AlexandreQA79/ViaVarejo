/// <reference types="cypress" />

import{
    inputText,
    validateText,
    validateElementEnabled,  
    clickItem,
    visitPage,
    logoutNoCheck,
    clearStorage,
    clickItemContains,
}from '../support/util/funcoes'

import * as CE from '../support/util/commomElementLogin'

describe('item carrinho',() =>{

    beforeEach(() => {
        visitPage('https://www.casasbahia.com.br', 2)
      })

it('Validar iten no carrinho de compras',() =>{

    const produto = "Mega Drive"
        
    validateText('body','Logo')
    inputText(CE.campoBusca, produto)
    cy.type('{enter}')
    validateText('body', 'Console Mega Drive Tec Toy + 1 Controle + 22 Jogos na Memória')
    clickItemContains('body', 'Console Mega Drive Tec Toy + 1 Controle + 22 Jogos na Memória')
    validateText('body', '359,99')
    validateElementEnabled(CE.btnAdicionarCarrinho)
    clickItem(CE.btnAdicionarCarrinho)
    validateElementEnabled(CE.btnComprar)
    clickItem(CE.btnComprar)
    validateText('body', 'Console Mega Drive Tec Toy + 1 Controle + 22 Jogos na Memória')
    cy.wait(2000)
    logoutNoCheck()
    clearStorage()
    cy.wait(4000)
        
    })

})
