/// <reference types="cypress" />

describe('Banking Project - Manager Actions', () => {
    beforeEach(() => {
      // Visit the application before each test
      cy.visit('/');
    });
    
    it('Should log in as Bank Manager', () => {
      // Click the 'Bank Manager Login' button
      cy.contains('Bank Manager Login').click();
  
      // Verify that the "Add Customer", "Open Account", and "Customers" buttons are visible
      cy.contains('Add Customer').should('be.visible');
      cy.contains('Open Account').should('be.visible');
      cy.contains('Customers').should('be.visible');
    });
  
    it('Should add a new customer', () => {
      // Click on "Add Customer" button
      cy.contains('Add Customer').click();
  
      // Fill in customer details
      cy.get('input[ng-model="fName"]').type('John');
      cy.get('input[ng-model="lName"]').type('Doe');
      cy.get('input[ng-model="postCd"]').type('12345');
  
      // Click on "Add Customer" button
      cy.get('button[type="submit"]').click();
  
      // Verify the alert message and accept it
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Customer added successfully with customer id');
      });
    });
  
    // it('Should open a new account for a customer', () => {
    //   // Log in as Bank Manager
    //   cy.contains('Bank Manager Login').click();
  
    //   // Click on "Open Account" button
    //   cy.contains('Open Account').click();
  
    //   // Select a customer
    //   cy.get('#userSelect').select('John Doe');
  
    //   // Select a currency
    //   cy.get('#currency').select('Dollar');
  
    //   // Click on "Process" button
    //   cy.get('button[type="submit"]').click();
  
    //   // Verify the alert message and accept it
    //   cy.on('window:alert', (text) => {
    //     expect(text).to.contains('Account created successfully with account Number');
    //   });
    // });
  
    // it('Should verify the customer exists in the Customers list', () => {
    //   // Log in as Bank Manager
    //   cy.contains('Bank Manager Login').click();
  
    //   // Click on "Customers" button
    //   cy.contains('Customers').click();
  
    //   // Verify that the customer exists in the list
    //   cy.get('tbody').contains('tr', 'John').should('be.visible');
    // });
  });
  