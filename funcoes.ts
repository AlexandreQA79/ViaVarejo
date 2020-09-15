/// <reference types="cypress" />

import * as CE from './commomElementLogin'

export function visitPage(page: string, waitTime: number = 0): void {
    cy.visit(page)
    if (waitTime > 0)
        cy.wait(waitTime * 1000)
}

export function clickItem(itemId: string, waitTime: number = 0): void {
    cy.get(itemId).click()
    if (waitTime > 0)
        cy.wait(waitTime * 1000)
}

export function clickToSelectCheckbox(itemId: string, waitTime: number = 0): void {
    cy.get(itemId).check()
    if (waitTime > 0)
        cy.wait(waitTime * 1000)
}

export function clickToDeselectCheckbox(itemId: string, waitTime: number = 0): void {
    cy.get(itemId).uncheck()
    if (waitTime > 0)
        cy.wait(waitTime * 1000)
}

export function selectItem(itemId: string, value: string, waitTime: number = 0): void {
    cy.get(itemId).select(value)
    if (waitTime > 0)
        cy.wait(waitTime * 1000)
}

export function clickItemContains(elementType: string, elementText: string, waitTime: number = 0): void {
    cy.get(elementType).contains(elementText).click()
    if (waitTime > 0)
        cy.wait(waitTime * 1000)
}

export function findAndClickItem(parentItemId: string, itemId: string, waitTime: number = 0): void {
    cy.get(parentItemId).find(itemId).click()
    if (waitTime > 0)
        cy.wait(waitTime * 1000)
}

export function focusItem(itemId: string): void {
    cy.get(itemId).focus()
}

export function findAndValidateElementVisible(parentItemId: string, itemId: string): void {
    cy.get(parentItemId).find(itemId).should('be.visible')
}

export function clickPaymentToggle(button: string): void {
    cy
        .wait(2 * 1000)
        .get('body').then((body) => {
        if (body.find('[aria-checked="false"]').length > 0) {
            cy.log('I\'m going to activate the payment manager')
            clickItem(button)
            cy.get('[aria-checked="true"]').should('be.visible')
        } else {
            cy.log('the payment manager already assigned')
        }
    })
        .wait(2 * 1000)
}

export function inputText(element: string, value: string): void {
    cy.get(element).clear().type(value)
}

export function inputTextWithoutClear(element: string, value: string): void {
    cy.get(element).type(value)
}

export function clearText(element: string): void {
    cy.get(element).clear()
}

export function validateText(element: string, text: string): void {
    cy.get(element).should('contain', text)
}

export function validateTextShould(element: string, value: string): void {
    cy.get(element).should(value)
}

export function validateElementExists(element: string): void {
    cy.get(element).should('exist')
}

export function validateElementDoesNotExist(element: string): void {
    cy.get(element).should('not.exist')
}

export function validateElementEnabled(element: string): void {
    cy.get(element).should('be.enabled')
}

export function validateElementNotEnabled(element: string): void {
    cy.get(element).should('not.be.enabled')
}

export function validateElementContainsTextEnabled(elementType: string, elementText: string): void {
    cy.get(elementType).contains(elementText).should('be.enabled')
}

export function validateElementContainsTextNotEnabled(elementType: string, elementText: string): void {
    cy.get(elementType).contains(elementText).should('not.be.enabled')
}

export function validateElementContainsIsVisible(elementType: string, elementText: string): void {
    cy.get(elementType).contains(elementText).should('be.visible')
}

export function validateElementContainsIsNotVisible(elementType: string, elementText: string): void {
    cy.get(elementType).contains(elementText).should('not.be.visible')
}

export function validateElementContainsExist(elementType: string, elementText: string): void {
    cy.get(elementType).contains(elementText).should('exist')
}

export function validateElementFindContainsExists(elementType: string, element: string, elementText: string): void {
    cy.get(elementType).find(element).contains(elementText).should('exist')
}

export function validateElementIsVisible(element: string): void {
    cy.get(element).should('be.visible')
}

export function validateElementIsNotVisible(element: string): void {
    cy.get(element).should('not.be.visible')
}

export function validateElementHasAttribute(element: string, attribute: string): void {
    cy.get(element).should('have.attr', attribute)
}

export function validateElementDoesNotHaveAttribute(element: string, attribute: string): void {
    cy.get(element).should('not.have.attr', attribute)
}

export function validateValue(element: string, value: string): void {
    cy.get(element).should('have.value', value)
}

export function validateCheckboxIsChecked(id: string): void {
    cy.get(id).should('be.checked')
}

export function validateCheckboxIsNotChecked(id: string): void {
    cy.get(id).should('not.be.checked')
}

export function validateUrl(url: string): void {
    cy.location().should((loc) => {
        expect(loc.href).toEqual(url)
    });
    cy.log('URL: ' + url)
}

export function validateUrlShouldContain(urlComponent: string): void {
    cy.url().should('include', urlComponent)
}

export function validateIframeExists(): void {
  cy.get('.zoid-component-frame').should('exist')
}

export function validateIframeContents(contents: string, waitTime: number = 0): void {
    cy.iframe('.zoid-component-frame').wait(waitTime * 1000).should('contain', contents)
}

export function validateIframeElementContents(element: string, contents: string, waitTime: number = 0): void {
  cy.get('.zoid-component-frame')
  .then(($iframe) => {
    const $body = $iframe.contents().find('body')[0]
    cy.wrap($body)
    .find(element)
    .contains(contents)
    .should('exist')
  })
}

export function scrollToAndFindVisible(element: string, searchFor: string): void {
    cy.get(element).scrollIntoView().find(searchFor).should('be.visible')
}

export function scrollToContainsElementWithTextIsVisible(element: string, searchIn: string, searchFor: string): void {
    cy.get(element).scrollIntoView().find(searchIn).contains(searchFor).should('be.visible')
}

export function scrollToContainsTextIsVisible(element: string, searchFor: string): void {
    cy.get(element).scrollIntoView().contains(searchFor).should('be.visible')
}

export function scrollToFindAndClick(element: string, searchFor: string, waitTime: number = 0): void {
    cy.get(element).scrollIntoView().find(searchFor).click()
    if (waitTime > 0)
        cy.wait(waitTime * 1000)
}

export function randomNumber(multiplier: number = 10000): number {
    return Math.floor(Math.random() * multiplier)
}

export function clearStorage(): void {
    log('Start Clear Storage')
    cy.clearCookies()
    cy.clearLocalStorage()
    log('End Clear Storage')
}

export function log(text: string = '') {
    cy.log(text)
}

export function logoutNoCheck(){
    cy.get('.avatar > #Layer_2').click()
    cy.get('#log-out').click()
}